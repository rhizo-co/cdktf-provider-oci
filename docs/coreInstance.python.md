# `coreInstance` Submodule <a name="`coreInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstance <a name="CoreInstance" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance oci_core_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  agent_config: CoreInstanceAgentConfig = None,
  async: typing.Union[bool, IResolvable] = None,
  availability_config: CoreInstanceAvailabilityConfig = None,
  capacity_reservation_id: str = None,
  cluster_placement_group_id: str = None,
  compute_cluster_id: str = None,
  create_vnic_details: CoreInstanceCreateVnicDetails = None,
  dedicated_vm_host_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  extended_metadata: typing.Mapping[str] = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  image: str = None,
  instance_configuration_id: str = None,
  instance_options: CoreInstanceInstanceOptions = None,
  ipxe_script: str = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  launch_options: CoreInstanceLaunchOptions = None,
  launch_volume_attachments: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]] = None,
  metadata: typing.Mapping[str] = None,
  platform_config: CoreInstancePlatformConfig = None,
  preemptible_instance_config: CoreInstancePreemptibleInstanceConfig = None,
  preserve_boot_volume: typing.Union[bool, IResolvable] = None,
  preserve_data_volumes_created_at_launch: typing.Union[bool, IResolvable] = None,
  security_attributes: typing.Mapping[str] = None,
  shape: str = None,
  shape_config: CoreInstanceShapeConfig = None,
  source_details: CoreInstanceSourceDetails = None,
  state: str = None,
  subnet_id: str = None,
  timeouts: CoreInstanceTimeouts = None,
  update_operation_constraint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.agentConfig">agent_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.async">async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityConfig">availability_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.extendedMetadata">extended_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceConfigurationId">instance_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceOptions">instance_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.ipxeScript">ipxe_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchOptions">launch_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchVolumeAttachments">launch_volume_attachments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]</code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.platformConfig">platform_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preemptibleInstanceConfig">preemptible_instance_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveBootVolume">preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveDataVolumesCreatedAtLaunch">preserve_data_volumes_created_at_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.updateOperationConstraint">update_operation_constraint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `agent_config`<sup>Optional</sup> <a name="agent_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.agentConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `async`<sup>Optional</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.async"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `availability_config`<sup>Optional</sup> <a name="availability_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `compute_cluster_id`<sup>Optional</sup> <a name="compute_cluster_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.computeClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `create_vnic_details`<sup>Optional</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.createVnicDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `dedicated_vm_host_id`<sup>Optional</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dedicatedVmHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `extended_metadata`<sup>Optional</sup> <a name="extended_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.extendedMetadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.faultDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.hostnameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `instance_configuration_id`<sup>Optional</sup> <a name="instance_configuration_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `instance_options`<sup>Optional</sup> <a name="instance_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `ipxe_script`<sup>Optional</sup> <a name="ipxe_script" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.ipxeScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.isPvEncryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `launch_options`<sup>Optional</sup> <a name="launch_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `launch_volume_attachments`<sup>Optional</sup> <a name="launch_volume_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchVolumeAttachments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `platform_config`<sup>Optional</sup> <a name="platform_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.platformConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `preemptible_instance_config`<sup>Optional</sup> <a name="preemptible_instance_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preemptibleInstanceConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `preserve_boot_volume`<sup>Optional</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveBootVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `preserve_data_volumes_created_at_launch`<sup>Optional</sup> <a name="preserve_data_volumes_created_at_launch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveDataVolumesCreatedAtLaunch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `update_operation_constraint`<sup>Optional</sup> <a name="update_operation_constraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.updateOperationConstraint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig">put_agent_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig">put_availability_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails">put_create_vnic_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions">put_instance_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions">put_launch_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments">put_launch_volume_attachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig">put_platform_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig">put_preemptible_instance_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig">reset_agent_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync">reset_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig">reset_availability_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId">reset_cluster_placement_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId">reset_compute_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails">reset_create_vnic_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId">reset_dedicated_vm_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata">reset_extended_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain">reset_fault_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId">reset_instance_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions">reset_instance_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript">reset_ipxe_script</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled">reset_is_pv_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions">reset_launch_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments">reset_launch_volume_attachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig">reset_platform_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig">reset_preemptible_instance_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume">reset_preserve_boot_volume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch">reset_preserve_data_volumes_created_at_launch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape">reset_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig">reset_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails">reset_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint">reset_update_operation_constraint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_config` <a name="put_agent_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig"></a>

```python
def put_agent_config(
  are_all_plugins_disabled: typing.Union[bool, IResolvable] = None,
  is_management_disabled: typing.Union[bool, IResolvable] = None,
  is_monitoring_disabled: typing.Union[bool, IResolvable] = None,
  plugins_config: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]] = None
) -> None
```

###### `are_all_plugins_disabled`<sup>Optional</sup> <a name="are_all_plugins_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.areAllPluginsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

###### `is_management_disabled`<sup>Optional</sup> <a name="is_management_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.isManagementDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

###### `is_monitoring_disabled`<sup>Optional</sup> <a name="is_monitoring_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.isMonitoringDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

###### `plugins_config`<sup>Optional</sup> <a name="plugins_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.pluginsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

##### `put_availability_config` <a name="put_availability_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig"></a>

```python
def put_availability_config(
  is_live_migration_preferred: typing.Union[bool, IResolvable] = None,
  recovery_action: str = None
) -> None
```

###### `is_live_migration_preferred`<sup>Optional</sup> <a name="is_live_migration_preferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.isLiveMigrationPreferred"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

###### `recovery_action`<sup>Optional</sup> <a name="recovery_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.recoveryAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

##### `put_create_vnic_details` <a name="put_create_vnic_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails"></a>

```python
def put_create_vnic_details(
  assign_ipv6_ip: typing.Union[bool, IResolvable] = None,
  assign_private_dns_record: typing.Union[bool, IResolvable] = None,
  assign_public_ip: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  security_attributes: typing.Mapping[str] = None,
  skip_source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  vlan_id: str = None
) -> None
```

###### `assign_ipv6_ip`<sup>Optional</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.assignIpv6Ip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

###### `assign_private_dns_record`<sup>Optional</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.assignPrivateDnsRecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.assignPublicIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

###### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.hostnameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

###### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.ipv6AddressIpv6SubnetCidrPairDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

###### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

###### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

###### `skip_source_dest_check`<sup>Optional</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.skipSourceDestCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

##### `put_instance_options` <a name="put_instance_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions"></a>

```python
def put_instance_options(
  are_legacy_imds_endpoints_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `are_legacy_imds_endpoints_disabled`<sup>Optional</sup> <a name="are_legacy_imds_endpoints_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions.parameter.areLegacyImdsEndpointsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

##### `put_launch_options` <a name="put_launch_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions"></a>

```python
def put_launch_options(
  boot_volume_type: str = None,
  firmware: str = None,
  is_consistent_volume_naming_enabled: typing.Union[bool, IResolvable] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  network_type: str = None,
  remote_data_volume_type: str = None
) -> None
```

###### `boot_volume_type`<sup>Optional</sup> <a name="boot_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.bootVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

###### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.firmware"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

###### `is_consistent_volume_naming_enabled`<sup>Optional</sup> <a name="is_consistent_volume_naming_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.isConsistentVolumeNamingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

###### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.isPvEncryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

###### `network_type`<sup>Optional</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

###### `remote_data_volume_type`<sup>Optional</sup> <a name="remote_data_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.remoteDataVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

##### `put_launch_volume_attachments` <a name="put_launch_volume_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments"></a>

```python
def put_launch_volume_attachments(
  value: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]

---

##### `put_platform_config` <a name="put_platform_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig"></a>

```python
def put_platform_config(
  type: str,
  are_virtual_instructions_enabled: typing.Union[bool, IResolvable] = None,
  config_map: typing.Mapping[str] = None,
  is_access_control_service_enabled: typing.Union[bool, IResolvable] = None,
  is_input_output_memory_management_unit_enabled: typing.Union[bool, IResolvable] = None,
  is_measured_boot_enabled: typing.Union[bool, IResolvable] = None,
  is_memory_encryption_enabled: typing.Union[bool, IResolvable] = None,
  is_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  is_symmetric_multi_threading_enabled: typing.Union[bool, IResolvable] = None,
  is_trusted_platform_module_enabled: typing.Union[bool, IResolvable] = None,
  numa_nodes_per_socket: str = None,
  percentage_of_cores_enabled: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

###### `are_virtual_instructions_enabled`<sup>Optional</sup> <a name="are_virtual_instructions_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.areVirtualInstructionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

###### `config_map`<sup>Optional</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.configMap"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

###### `is_access_control_service_enabled`<sup>Optional</sup> <a name="is_access_control_service_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isAccessControlServiceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

###### `is_input_output_memory_management_unit_enabled`<sup>Optional</sup> <a name="is_input_output_memory_management_unit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isInputOutputMemoryManagementUnitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

###### `is_measured_boot_enabled`<sup>Optional</sup> <a name="is_measured_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isMeasuredBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

###### `is_memory_encryption_enabled`<sup>Optional</sup> <a name="is_memory_encryption_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isMemoryEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

###### `is_secure_boot_enabled`<sup>Optional</sup> <a name="is_secure_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isSecureBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

###### `is_symmetric_multi_threading_enabled`<sup>Optional</sup> <a name="is_symmetric_multi_threading_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isSymmetricMultiThreadingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

###### `is_trusted_platform_module_enabled`<sup>Optional</sup> <a name="is_trusted_platform_module_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.isTrustedPlatformModuleEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

###### `numa_nodes_per_socket`<sup>Optional</sup> <a name="numa_nodes_per_socket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.numaNodesPerSocket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

###### `percentage_of_cores_enabled`<sup>Optional</sup> <a name="percentage_of_cores_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.percentageOfCoresEnabled"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

##### `put_preemptible_instance_config` <a name="put_preemptible_instance_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig"></a>

```python
def put_preemptible_instance_config(
  preemption_action: CoreInstancePreemptibleInstanceConfigPreemptionAction
) -> None
```

###### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig.parameter.preemptionAction"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig"></a>

```python
def put_shape_config(
  baseline_ocpu_utilization: str = None,
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None,
  vcpus: typing.Union[int, float] = None
) -> None
```

###### `baseline_ocpu_utilization`<sup>Optional</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.baselineOcpuUtilization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

###### `vcpus`<sup>Optional</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.vcpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

##### `put_source_details` <a name="put_source_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails"></a>

```python
def put_source_details(
  source_type: str,
  boot_volume_size_in_gbs: str = None,
  boot_volume_vpus_per_gb: str = None,
  instance_source_image_filter_details: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails = None,
  is_preserve_boot_volume_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  source_id: str = None
) -> None
```

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

###### `boot_volume_size_in_gbs`<sup>Optional</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.bootVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

###### `boot_volume_vpus_per_gb`<sup>Optional</sup> <a name="boot_volume_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.bootVolumeVpusPerGb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

###### `instance_source_image_filter_details`<sup>Optional</sup> <a name="instance_source_image_filter_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.instanceSourceImageFilterDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

###### `is_preserve_boot_volume_enabled`<sup>Optional</sup> <a name="is_preserve_boot_volume_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.isPreserveBootVolumeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

###### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.sourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

##### `reset_agent_config` <a name="reset_agent_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig"></a>

```python
def reset_agent_config() -> None
```

##### `reset_async` <a name="reset_async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync"></a>

```python
def reset_async() -> None
```

##### `reset_availability_config` <a name="reset_availability_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig"></a>

```python
def reset_availability_config() -> None
```

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_cluster_placement_group_id` <a name="reset_cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId"></a>

```python
def reset_cluster_placement_group_id() -> None
```

##### `reset_compute_cluster_id` <a name="reset_compute_cluster_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId"></a>

```python
def reset_compute_cluster_id() -> None
```

##### `reset_create_vnic_details` <a name="reset_create_vnic_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails"></a>

```python
def reset_create_vnic_details() -> None
```

##### `reset_dedicated_vm_host_id` <a name="reset_dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId"></a>

```python
def reset_dedicated_vm_host_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_extended_metadata` <a name="reset_extended_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata"></a>

```python
def reset_extended_metadata() -> None
```

##### `reset_fault_domain` <a name="reset_fault_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain"></a>

```python
def reset_fault_domain() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_instance_configuration_id` <a name="reset_instance_configuration_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId"></a>

```python
def reset_instance_configuration_id() -> None
```

##### `reset_instance_options` <a name="reset_instance_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions"></a>

```python
def reset_instance_options() -> None
```

##### `reset_ipxe_script` <a name="reset_ipxe_script" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript"></a>

```python
def reset_ipxe_script() -> None
```

##### `reset_is_pv_encryption_in_transit_enabled` <a name="reset_is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled"></a>

```python
def reset_is_pv_encryption_in_transit_enabled() -> None
```

##### `reset_launch_options` <a name="reset_launch_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions"></a>

```python
def reset_launch_options() -> None
```

##### `reset_launch_volume_attachments` <a name="reset_launch_volume_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments"></a>

```python
def reset_launch_volume_attachments() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_platform_config` <a name="reset_platform_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig"></a>

```python
def reset_platform_config() -> None
```

##### `reset_preemptible_instance_config` <a name="reset_preemptible_instance_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig"></a>

```python
def reset_preemptible_instance_config() -> None
```

##### `reset_preserve_boot_volume` <a name="reset_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume"></a>

```python
def reset_preserve_boot_volume() -> None
```

##### `reset_preserve_data_volumes_created_at_launch` <a name="reset_preserve_data_volumes_created_at_launch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch"></a>

```python
def reset_preserve_data_volumes_created_at_launch() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_shape` <a name="reset_shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape"></a>

```python
def reset_shape() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```

##### `reset_source_details` <a name="reset_source_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails"></a>

```python
def reset_source_details() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_operation_constraint` <a name="reset_update_operation_constraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint"></a>

```python
def reset_update_operation_constraint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig">agent_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig">availability_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId">boot_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions">instance_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode">is_cross_numa_node</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode">launch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions">launch_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments">launch_volume_attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig">platform_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig">preemptible_instance_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState">security_attributes_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue">time_maintenance_reboot_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput">agent_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput">async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput">availability_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput">cluster_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput">compute_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput">create_vnic_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput">dedicated_vm_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput">extended_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput">fault_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput">instance_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput">instance_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput">ipxe_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput">is_pv_encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput">launch_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput">launch_volume_attachments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput">platform_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput">preemptible_instance_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput">preserve_boot_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput">preserve_data_volumes_created_at_launch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput">source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput">update_operation_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async">async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata">extended_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId">instance_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript">ipxe_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume">preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch">preserve_data_volumes_created_at_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint">update_operation_constraint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_config`<sup>Required</sup> <a name="agent_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig"></a>

```python
agent_config: CoreInstanceAgentConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a>

---

##### `availability_config`<sup>Required</sup> <a name="availability_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig"></a>

```python
availability_config: CoreInstanceAvailabilityConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a>

---

##### `boot_volume_id`<sup>Required</sup> <a name="boot_volume_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId"></a>

```python
boot_volume_id: str
```

- *Type:* str

---

##### `create_vnic_details`<sup>Required</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails"></a>

```python
create_vnic_details: CoreInstanceCreateVnicDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a>

---

##### `instance_options`<sup>Required</sup> <a name="instance_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions"></a>

```python
instance_options: CoreInstanceInstanceOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a>

---

##### `is_cross_numa_node`<sup>Required</sup> <a name="is_cross_numa_node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode"></a>

```python
is_cross_numa_node: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `launch_mode`<sup>Required</sup> <a name="launch_mode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode"></a>

```python
launch_mode: str
```

- *Type:* str

---

##### `launch_options`<sup>Required</sup> <a name="launch_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions"></a>

```python
launch_options: CoreInstanceLaunchOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a>

---

##### `launch_volume_attachments`<sup>Required</sup> <a name="launch_volume_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments"></a>

```python
launch_volume_attachments: CoreInstanceLaunchVolumeAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a>

---

##### `platform_config`<sup>Required</sup> <a name="platform_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig"></a>

```python
platform_config: CoreInstancePlatformConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a>

---

##### `preemptible_instance_config`<sup>Required</sup> <a name="preemptible_instance_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig"></a>

```python
preemptible_instance_config: CoreInstancePreemptibleInstanceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a>

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_attributes_state`<sup>Required</sup> <a name="security_attributes_state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState"></a>

```python
security_attributes_state: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig"></a>

```python
shape_config: CoreInstanceShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a>

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails"></a>

```python
source_details: CoreInstanceSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_maintenance_reboot_due`<sup>Required</sup> <a name="time_maintenance_reboot_due" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue"></a>

```python
time_maintenance_reboot_due: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts"></a>

```python
timeouts: CoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a>

---

##### `agent_config_input`<sup>Optional</sup> <a name="agent_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput"></a>

```python
agent_config_input: CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `async_input`<sup>Optional</sup> <a name="async_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput"></a>

```python
async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_config_input`<sup>Optional</sup> <a name="availability_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput"></a>

```python
availability_config_input: CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `cluster_placement_group_id_input`<sup>Optional</sup> <a name="cluster_placement_group_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput"></a>

```python
cluster_placement_group_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_cluster_id_input`<sup>Optional</sup> <a name="compute_cluster_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput"></a>

```python
compute_cluster_id_input: str
```

- *Type:* str

---

##### `create_vnic_details_input`<sup>Optional</sup> <a name="create_vnic_details_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput"></a>

```python
create_vnic_details_input: CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `dedicated_vm_host_id_input`<sup>Optional</sup> <a name="dedicated_vm_host_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput"></a>

```python
dedicated_vm_host_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `extended_metadata_input`<sup>Optional</sup> <a name="extended_metadata_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput"></a>

```python
extended_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fault_domain_input`<sup>Optional</sup> <a name="fault_domain_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput"></a>

```python
fault_domain_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `instance_configuration_id_input`<sup>Optional</sup> <a name="instance_configuration_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput"></a>

```python
instance_configuration_id_input: str
```

- *Type:* str

---

##### `instance_options_input`<sup>Optional</sup> <a name="instance_options_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput"></a>

```python
instance_options_input: CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `ipxe_script_input`<sup>Optional</sup> <a name="ipxe_script_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput"></a>

```python
ipxe_script_input: str
```

- *Type:* str

---

##### `is_pv_encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput"></a>

```python
is_pv_encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `launch_options_input`<sup>Optional</sup> <a name="launch_options_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput"></a>

```python
launch_options_input: CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `launch_volume_attachments_input`<sup>Optional</sup> <a name="launch_volume_attachments_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput"></a>

```python
launch_volume_attachments_input: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform_config_input`<sup>Optional</sup> <a name="platform_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput"></a>

```python
platform_config_input: CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `preemptible_instance_config_input`<sup>Optional</sup> <a name="preemptible_instance_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput"></a>

```python
preemptible_instance_config_input: CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `preserve_boot_volume_input`<sup>Optional</sup> <a name="preserve_boot_volume_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput"></a>

```python
preserve_boot_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preserve_data_volumes_created_at_launch_input`<sup>Optional</sup> <a name="preserve_data_volumes_created_at_launch_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput"></a>

```python
preserve_data_volumes_created_at_launch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput"></a>

```python
shape_config_input: CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput"></a>

```python
source_details_input: CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>]

---

##### `update_operation_constraint_input`<sup>Optional</sup> <a name="update_operation_constraint_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput"></a>

```python
update_operation_constraint_input: str
```

- *Type:* str

---

##### `async`<sup>Required</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async"></a>

```python
async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

---

##### `dedicated_vm_host_id`<sup>Required</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId"></a>

```python
dedicated_vm_host_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `extended_metadata`<sup>Required</sup> <a name="extended_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata"></a>

```python
extended_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `instance_configuration_id`<sup>Required</sup> <a name="instance_configuration_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId"></a>

```python
instance_configuration_id: str
```

- *Type:* str

---

##### `ipxe_script`<sup>Required</sup> <a name="ipxe_script" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript"></a>

```python
ipxe_script: str
```

- *Type:* str

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `preserve_boot_volume`<sup>Required</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume"></a>

```python
preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preserve_data_volumes_created_at_launch`<sup>Required</sup> <a name="preserve_data_volumes_created_at_launch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch"></a>

```python
preserve_data_volumes_created_at_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `update_operation_constraint`<sup>Required</sup> <a name="update_operation_constraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint"></a>

```python
update_operation_constraint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceAgentConfig <a name="CoreInstanceAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAgentConfig(
  are_all_plugins_disabled: typing.Union[bool, IResolvable] = None,
  is_management_disabled: typing.Union[bool, IResolvable] = None,
  is_monitoring_disabled: typing.Union[bool, IResolvable] = None,
  plugins_config: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled">are_all_plugins_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled">is_management_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled">is_monitoring_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig">plugins_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]</code> | plugins_config block. |

---

##### `are_all_plugins_disabled`<sup>Optional</sup> <a name="are_all_plugins_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled"></a>

```python
are_all_plugins_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

##### `is_management_disabled`<sup>Optional</sup> <a name="is_management_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled"></a>

```python
is_management_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

##### `is_monitoring_disabled`<sup>Optional</sup> <a name="is_monitoring_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled"></a>

```python
is_monitoring_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

##### `plugins_config`<sup>Optional</sup> <a name="plugins_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig"></a>

```python
plugins_config: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

### CoreInstanceAgentConfigPluginsConfig <a name="CoreInstanceAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAgentConfigPluginsConfig(
  desired_state: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}. |

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}.

---

### CoreInstanceAvailabilityConfig <a name="CoreInstanceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAvailabilityConfig(
  is_live_migration_preferred: typing.Union[bool, IResolvable] = None,
  recovery_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred">is_live_migration_preferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction">recovery_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}. |

---

##### `is_live_migration_preferred`<sup>Optional</sup> <a name="is_live_migration_preferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred"></a>

```python
is_live_migration_preferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

##### `recovery_action`<sup>Optional</sup> <a name="recovery_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction"></a>

```python
recovery_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

### CoreInstanceConfig <a name="CoreInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  agent_config: CoreInstanceAgentConfig = None,
  async: typing.Union[bool, IResolvable] = None,
  availability_config: CoreInstanceAvailabilityConfig = None,
  capacity_reservation_id: str = None,
  cluster_placement_group_id: str = None,
  compute_cluster_id: str = None,
  create_vnic_details: CoreInstanceCreateVnicDetails = None,
  dedicated_vm_host_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  extended_metadata: typing.Mapping[str] = None,
  fault_domain: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  image: str = None,
  instance_configuration_id: str = None,
  instance_options: CoreInstanceInstanceOptions = None,
  ipxe_script: str = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  launch_options: CoreInstanceLaunchOptions = None,
  launch_volume_attachments: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]] = None,
  metadata: typing.Mapping[str] = None,
  platform_config: CoreInstancePlatformConfig = None,
  preemptible_instance_config: CoreInstancePreemptibleInstanceConfig = None,
  preserve_boot_volume: typing.Union[bool, IResolvable] = None,
  preserve_data_volumes_created_at_launch: typing.Union[bool, IResolvable] = None,
  security_attributes: typing.Mapping[str] = None,
  shape: str = None,
  shape_config: CoreInstanceShapeConfig = None,
  source_details: CoreInstanceSourceDetails = None,
  state: str = None,
  subnet_id: str = None,
  timeouts: CoreInstanceTimeouts = None,
  update_operation_constraint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig">agent_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async">async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig">availability_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata">extended_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain">fault_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId">instance_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions">instance_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript">ipxe_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions">launch_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments">launch_volume_attachments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]</code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig">platform_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig">preemptible_instance_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume">preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch">preserve_data_volumes_created_at_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint">update_operation_constraint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `agent_config`<sup>Optional</sup> <a name="agent_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig"></a>

```python
agent_config: CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `async`<sup>Optional</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async"></a>

```python
async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `availability_config`<sup>Optional</sup> <a name="availability_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig"></a>

```python
availability_config: CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `compute_cluster_id`<sup>Optional</sup> <a name="compute_cluster_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `create_vnic_details`<sup>Optional</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails"></a>

```python
create_vnic_details: CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `dedicated_vm_host_id`<sup>Optional</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId"></a>

```python
dedicated_vm_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `extended_metadata`<sup>Optional</sup> <a name="extended_metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata"></a>

```python
extended_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `fault_domain`<sup>Optional</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `instance_configuration_id`<sup>Optional</sup> <a name="instance_configuration_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId"></a>

```python
instance_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `instance_options`<sup>Optional</sup> <a name="instance_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions"></a>

```python
instance_options: CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `ipxe_script`<sup>Optional</sup> <a name="ipxe_script" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript"></a>

```python
ipxe_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `launch_options`<sup>Optional</sup> <a name="launch_options" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions"></a>

```python
launch_options: CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `launch_volume_attachments`<sup>Optional</sup> <a name="launch_volume_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments"></a>

```python
launch_volume_attachments: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `platform_config`<sup>Optional</sup> <a name="platform_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig"></a>

```python
platform_config: CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `preemptible_instance_config`<sup>Optional</sup> <a name="preemptible_instance_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig"></a>

```python
preemptible_instance_config: CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `preserve_boot_volume`<sup>Optional</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume"></a>

```python
preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `preserve_data_volumes_created_at_launch`<sup>Optional</sup> <a name="preserve_data_volumes_created_at_launch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch"></a>

```python
preserve_data_volumes_created_at_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig"></a>

```python
shape_config: CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails"></a>

```python
source_details: CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts"></a>

```python
timeouts: CoreInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `update_operation_constraint`<sup>Optional</sup> <a name="update_operation_constraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint"></a>

```python
update_operation_constraint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

### CoreInstanceCreateVnicDetails <a name="CoreInstanceCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceCreateVnicDetails(
  assign_ipv6_ip: typing.Union[bool, IResolvable] = None,
  assign_private_dns_record: typing.Union[bool, IResolvable] = None,
  assign_public_ip: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  security_attributes: typing.Mapping[str] = None,
  skip_source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  vlan_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip">assign_ipv6_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord">assign_private_dns_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}. |

---

##### `assign_ipv6_ip`<sup>Optional</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip"></a>

```python
assign_ipv6_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

##### `assign_private_dns_record`<sup>Optional</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```python
assign_private_dns_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `skip_source_dest_check`<sup>Optional</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails(
  ipv6_address: str = None,
  ipv6_subnet_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}. |

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}.

---

##### `ipv6_subnet_cidr`<sup>Optional</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}.

---

### CoreInstanceInstanceOptions <a name="CoreInstanceInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceInstanceOptions(
  are_legacy_imds_endpoints_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled">are_legacy_imds_endpoints_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}. |

---

##### `are_legacy_imds_endpoints_disabled`<sup>Optional</sup> <a name="are_legacy_imds_endpoints_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled"></a>

```python
are_legacy_imds_endpoints_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

### CoreInstanceLaunchOptions <a name="CoreInstanceLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchOptions(
  boot_volume_type: str = None,
  firmware: str = None,
  is_consistent_volume_naming_enabled: typing.Union[bool, IResolvable] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  network_type: str = None,
  remote_data_volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType">boot_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware">firmware</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled">is_consistent_volume_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType">remote_data_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}. |

---

##### `boot_volume_type`<sup>Optional</sup> <a name="boot_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType"></a>

```python
boot_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

##### `is_consistent_volume_naming_enabled`<sup>Optional</sup> <a name="is_consistent_volume_naming_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled"></a>

```python
is_consistent_volume_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

##### `remote_data_volume_type`<sup>Optional</sup> <a name="remote_data_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType"></a>

```python
remote_data_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

### CoreInstanceLaunchVolumeAttachments <a name="CoreInstanceLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchVolumeAttachments(
  type: str,
  device: str = None,
  display_name: str = None,
  encryption_in_transit_type: str = None,
  is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  is_read_only: typing.Union[bool, IResolvable] = None,
  is_shareable: typing.Union[bool, IResolvable] = None,
  launch_create_volume_details: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails = None,
  use_chap: typing.Union[bool, IResolvable] = None,
  volume_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable">is_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails">launch_create_volume_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | launch_create_volume_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap">use_chap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device"></a>

```python
device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `encryption_in_transit_type`<sup>Optional</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType"></a>

```python
encryption_in_transit_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}.

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Optional</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled"></a>

```python
is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `is_read_only`<sup>Optional</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}.

---

##### `is_shareable`<sup>Optional</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable"></a>

```python
is_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}.

---

##### `launch_create_volume_details`<sup>Optional</sup> <a name="launch_create_volume_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails"></a>

```python
launch_create_volume_details: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

launch_create_volume_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}

---

##### `use_chap`<sup>Optional</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap"></a>

```python
use_chap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}.

---

##### `volume_id`<sup>Optional</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}.

---

### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails(
  size_in_gbs: str,
  volume_creation_type: str,
  compartment_id: str = None,
  display_name: str = None,
  kms_key_id: str = None,
  vpus_per_gb: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType">volume_creation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}. |

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

##### `volume_creation_type`<sup>Required</sup> <a name="volume_creation_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType"></a>

```python
volume_creation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `vpus_per_gb`<sup>Optional</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb"></a>

```python
vpus_per_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

### CoreInstancePlatformConfig <a name="CoreInstancePlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePlatformConfig(
  type: str,
  are_virtual_instructions_enabled: typing.Union[bool, IResolvable] = None,
  config_map: typing.Mapping[str] = None,
  is_access_control_service_enabled: typing.Union[bool, IResolvable] = None,
  is_input_output_memory_management_unit_enabled: typing.Union[bool, IResolvable] = None,
  is_measured_boot_enabled: typing.Union[bool, IResolvable] = None,
  is_memory_encryption_enabled: typing.Union[bool, IResolvable] = None,
  is_secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  is_symmetric_multi_threading_enabled: typing.Union[bool, IResolvable] = None,
  is_trusted_platform_module_enabled: typing.Union[bool, IResolvable] = None,
  numa_nodes_per_socket: str = None,
  percentage_of_cores_enabled: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled">are_virtual_instructions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap">config_map</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled">is_access_control_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled">is_input_output_memory_management_unit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled">is_measured_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled">is_memory_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled">is_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled">is_symmetric_multi_threading_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled">is_trusted_platform_module_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket">numa_nodes_per_socket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled">percentage_of_cores_enabled</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `are_virtual_instructions_enabled`<sup>Optional</sup> <a name="are_virtual_instructions_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled"></a>

```python
are_virtual_instructions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

##### `config_map`<sup>Optional</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap"></a>

```python
config_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

##### `is_access_control_service_enabled`<sup>Optional</sup> <a name="is_access_control_service_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled"></a>

```python
is_access_control_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

##### `is_input_output_memory_management_unit_enabled`<sup>Optional</sup> <a name="is_input_output_memory_management_unit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled"></a>

```python
is_input_output_memory_management_unit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

##### `is_measured_boot_enabled`<sup>Optional</sup> <a name="is_measured_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled"></a>

```python
is_measured_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

##### `is_memory_encryption_enabled`<sup>Optional</sup> <a name="is_memory_encryption_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled"></a>

```python
is_memory_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

##### `is_secure_boot_enabled`<sup>Optional</sup> <a name="is_secure_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled"></a>

```python
is_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

##### `is_symmetric_multi_threading_enabled`<sup>Optional</sup> <a name="is_symmetric_multi_threading_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled"></a>

```python
is_symmetric_multi_threading_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

##### `is_trusted_platform_module_enabled`<sup>Optional</sup> <a name="is_trusted_platform_module_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled"></a>

```python
is_trusted_platform_module_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

##### `numa_nodes_per_socket`<sup>Optional</sup> <a name="numa_nodes_per_socket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket"></a>

```python
numa_nodes_per_socket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

##### `percentage_of_cores_enabled`<sup>Optional</sup> <a name="percentage_of_cores_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled"></a>

```python
percentage_of_cores_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

### CoreInstancePreemptibleInstanceConfig <a name="CoreInstancePreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePreemptibleInstanceConfig(
  preemption_action: CoreInstancePreemptibleInstanceConfigPreemptionAction
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction">preemption_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction"></a>

```python
preemption_action: CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

### CoreInstancePreemptibleInstanceConfigPreemptionAction <a name="CoreInstancePreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction(
  type: str,
  preserve_boot_volume: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume">preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `preserve_boot_volume`<sup>Optional</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume"></a>

```python
preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

### CoreInstanceShapeConfig <a name="CoreInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceShapeConfig(
  baseline_ocpu_utilization: str = None,
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None,
  vcpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}. |

---

##### `baseline_ocpu_utilization`<sup>Optional</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

### CoreInstanceSourceDetails <a name="CoreInstanceSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceSourceDetails(
  source_type: str,
  boot_volume_size_in_gbs: str = None,
  boot_volume_vpus_per_gb: str = None,
  instance_source_image_filter_details: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails = None,
  is_preserve_boot_volume_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs">boot_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb">boot_volume_vpus_per_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails">instance_source_image_filter_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | instance_source_image_filter_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled">is_preserve_boot_volume_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}. |

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

##### `boot_volume_size_in_gbs`<sup>Optional</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs"></a>

```python
boot_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

##### `boot_volume_vpus_per_gb`<sup>Optional</sup> <a name="boot_volume_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb"></a>

```python
boot_volume_vpus_per_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

##### `instance_source_image_filter_details`<sup>Optional</sup> <a name="instance_source_image_filter_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails"></a>

```python
instance_source_image_filter_details: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

##### `is_preserve_boot_volume_enabled`<sup>Optional</sup> <a name="is_preserve_boot_volume_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled"></a>

```python
is_preserve_boot_volume_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

### CoreInstanceSourceDetailsInstanceSourceImageFilterDetails <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails(
  compartment_id: str,
  defined_tags_filter: typing.Mapping[str] = None,
  operating_system: str = None,
  operating_system_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter">defined_tags_filter</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}. |

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `defined_tags_filter`<sup>Optional</sup> <a name="defined_tags_filter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter"></a>

```python
defined_tags_filter: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

##### `operating_system_version`<sup>Optional</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

### CoreInstanceTimeouts <a name="CoreInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceAgentConfigOutputReference <a name="CoreInstanceAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAgentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig">put_plugins_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled">reset_are_all_plugins_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled">reset_is_management_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled">reset_is_monitoring_disabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig">reset_plugins_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_plugins_config` <a name="put_plugins_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig"></a>

```python
def put_plugins_config(
  value: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]

---

##### `reset_are_all_plugins_disabled` <a name="reset_are_all_plugins_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled"></a>

```python
def reset_are_all_plugins_disabled() -> None
```

##### `reset_is_management_disabled` <a name="reset_is_management_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled"></a>

```python
def reset_is_management_disabled() -> None
```

##### `reset_is_monitoring_disabled` <a name="reset_is_monitoring_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled"></a>

```python
def reset_is_monitoring_disabled() -> None
```

##### `reset_plugins_config` <a name="reset_plugins_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig"></a>

```python
def reset_plugins_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig">plugins_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput">are_all_plugins_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput">is_management_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput">is_monitoring_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput">plugins_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled">are_all_plugins_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled">is_management_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled">is_monitoring_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plugins_config`<sup>Required</sup> <a name="plugins_config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig"></a>

```python
plugins_config: CoreInstanceAgentConfigPluginsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a>

---

##### `are_all_plugins_disabled_input`<sup>Optional</sup> <a name="are_all_plugins_disabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput"></a>

```python
are_all_plugins_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_management_disabled_input`<sup>Optional</sup> <a name="is_management_disabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput"></a>

```python
is_management_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monitoring_disabled_input`<sup>Optional</sup> <a name="is_monitoring_disabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput"></a>

```python
is_monitoring_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plugins_config_input`<sup>Optional</sup> <a name="plugins_config_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput"></a>

```python
plugins_config_input: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]

---

##### `are_all_plugins_disabled`<sup>Required</sup> <a name="are_all_plugins_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```python
are_all_plugins_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_management_disabled`<sup>Required</sup> <a name="is_management_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled"></a>

```python
is_management_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_monitoring_disabled`<sup>Required</sup> <a name="is_monitoring_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```python
is_monitoring_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---


### CoreInstanceAgentConfigPluginsConfigList <a name="CoreInstanceAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAgentConfigPluginsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreInstanceAgentConfigPluginsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreInstanceAgentConfigPluginsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]]

---


### CoreInstanceAgentConfigPluginsConfigOutputReference <a name="CoreInstanceAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreInstanceAgentConfigPluginsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>]

---


### CoreInstanceAvailabilityConfigOutputReference <a name="CoreInstanceAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceAvailabilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred">reset_is_live_migration_preferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction">reset_recovery_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_live_migration_preferred` <a name="reset_is_live_migration_preferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred"></a>

```python
def reset_is_live_migration_preferred() -> None
```

##### `reset_recovery_action` <a name="reset_recovery_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction"></a>

```python
def reset_recovery_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput">is_live_migration_preferred_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput">recovery_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">is_live_migration_preferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction">recovery_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_live_migration_preferred_input`<sup>Optional</sup> <a name="is_live_migration_preferred_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput"></a>

```python
is_live_migration_preferred_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recovery_action_input`<sup>Optional</sup> <a name="recovery_action_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput"></a>

```python
recovery_action_input: str
```

- *Type:* str

---

##### `is_live_migration_preferred`<sup>Required</sup> <a name="is_live_migration_preferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```python
is_live_migration_preferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recovery_action`<sup>Required</sup> <a name="recovery_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction"></a>

```python
recovery_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">reset_ipv6_subnet_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_ipv6_subnet_cidr` <a name="reset_ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```python
def reset_ipv6_subnet_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr_input`<sup>Optional</sup> <a name="ipv6_subnet_cidr_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```python
ipv6_subnet_cidr_input: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]

---


### CoreInstanceCreateVnicDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceCreateVnicDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">put_ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip">reset_assign_ipv6_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">reset_assign_private_dns_record</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">reset_ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">reset_skip_source_dest_check</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ipv6_address_ipv6_subnet_cidr_pair_details` <a name="put_ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```python
def put_ipv6_address_ipv6_subnet_cidr_pair_details(
  value: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---

##### `reset_assign_ipv6_ip` <a name="reset_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```python
def reset_assign_ipv6_ip() -> None
```

##### `reset_assign_private_dns_record` <a name="reset_assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```python
def reset_assign_private_dns_record() -> None
```

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_ipv6_address_ipv6_subnet_cidr_pair_details` <a name="reset_ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```python
def reset_ipv6_address_ipv6_subnet_cidr_pair_details() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_skip_source_dest_check` <a name="reset_skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```python
def reset_skip_source_dest_check() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput">assign_ipv6_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">assign_private_dns_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6_address_ipv6_subnet_cidr_pair_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">skip_source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip">assign_ipv6_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assign_private_dns_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `assign_ipv6_ip_input`<sup>Optional</sup> <a name="assign_ipv6_ip_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```python
assign_ipv6_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_private_dns_record_input`<sup>Optional</sup> <a name="assign_private_dns_record_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```python
assign_private_dns_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details_input`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details_input: typing.Union[IResolvable, typing.List[CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skip_source_dest_check_input`<sup>Optional</sup> <a name="skip_source_dest_check_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```python
skip_source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `assign_ipv6_ip`<sup>Required</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```python
assign_ipv6_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_private_dns_record`<sup>Required</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```python
assign_private_dns_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skip_source_dest_check`<sup>Required</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---


### CoreInstanceInstanceOptionsOutputReference <a name="CoreInstanceInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceInstanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled">reset_are_legacy_imds_endpoints_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_are_legacy_imds_endpoints_disabled` <a name="reset_are_legacy_imds_endpoints_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled"></a>

```python
def reset_are_legacy_imds_endpoints_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput">are_legacy_imds_endpoints_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">are_legacy_imds_endpoints_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_legacy_imds_endpoints_disabled_input`<sup>Optional</sup> <a name="are_legacy_imds_endpoints_disabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput"></a>

```python
are_legacy_imds_endpoints_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `are_legacy_imds_endpoints_disabled`<sup>Required</sup> <a name="are_legacy_imds_endpoints_disabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```python
are_legacy_imds_endpoints_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---


### CoreInstanceLaunchOptionsOutputReference <a name="CoreInstanceLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType">reset_boot_volume_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware">reset_firmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled">reset_is_consistent_volume_naming_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled">reset_is_pv_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType">reset_remote_data_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_volume_type` <a name="reset_boot_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType"></a>

```python
def reset_boot_volume_type() -> None
```

##### `reset_firmware` <a name="reset_firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware"></a>

```python
def reset_firmware() -> None
```

##### `reset_is_consistent_volume_naming_enabled` <a name="reset_is_consistent_volume_naming_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled"></a>

```python
def reset_is_consistent_volume_naming_enabled() -> None
```

##### `reset_is_pv_encryption_in_transit_enabled` <a name="reset_is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```python
def reset_is_pv_encryption_in_transit_enabled() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_remote_data_volume_type` <a name="reset_remote_data_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType"></a>

```python
def reset_remote_data_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput">boot_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput">firmware_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput">is_consistent_volume_naming_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput">is_pv_encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput">remote_data_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType">boot_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware">firmware</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">is_consistent_volume_naming_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType">remote_data_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_volume_type_input`<sup>Optional</sup> <a name="boot_volume_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput"></a>

```python
boot_volume_type_input: str
```

- *Type:* str

---

##### `firmware_input`<sup>Optional</sup> <a name="firmware_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput"></a>

```python
firmware_input: str
```

- *Type:* str

---

##### `is_consistent_volume_naming_enabled_input`<sup>Optional</sup> <a name="is_consistent_volume_naming_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput"></a>

```python
is_consistent_volume_naming_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```python
is_pv_encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `remote_data_volume_type_input`<sup>Optional</sup> <a name="remote_data_volume_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput"></a>

```python
remote_data_volume_type_input: str
```

- *Type:* str

---

##### `boot_volume_type`<sup>Required</sup> <a name="boot_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType"></a>

```python
boot_volume_type: str
```

- *Type:* str

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware"></a>

```python
firmware: str
```

- *Type:* str

---

##### `is_consistent_volume_naming_enabled`<sup>Required</sup> <a name="is_consistent_volume_naming_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```python
is_consistent_volume_naming_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `remote_data_volume_type`<sup>Required</sup> <a name="remote_data_volume_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```python
remote_data_volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---


### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb">reset_vpus_per_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_vpus_per_gb` <a name="reset_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb"></a>

```python
def reset_vpus_per_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput">size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput">volume_creation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput">vpus_per_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">volume_creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `size_in_gbs_input`<sup>Optional</sup> <a name="size_in_gbs_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput"></a>

```python
size_in_gbs_input: str
```

- *Type:* str

---

##### `volume_creation_type_input`<sup>Optional</sup> <a name="volume_creation_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput"></a>

```python
volume_creation_type_input: str
```

- *Type:* str

---

##### `vpus_per_gb_input`<sup>Optional</sup> <a name="vpus_per_gb_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput"></a>

```python
vpus_per_gb_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `volume_creation_type`<sup>Required</sup> <a name="volume_creation_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```python
volume_creation_type: str
```

- *Type:* str

---

##### `vpus_per_gb`<sup>Required</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```python
vpus_per_gb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### CoreInstanceLaunchVolumeAttachmentsList <a name="CoreInstanceLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchVolumeAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreInstanceLaunchVolumeAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreInstanceLaunchVolumeAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]]

---


### CoreInstanceLaunchVolumeAttachmentsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails">put_launch_create_volume_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType">reset_encryption_in_transit_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled">reset_is_agent_auto_iscsi_login_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled">reset_is_pv_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly">reset_is_read_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable">reset_is_shareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails">reset_launch_create_volume_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap">reset_use_chap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId">reset_volume_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_launch_create_volume_details` <a name="put_launch_create_volume_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails"></a>

```python
def put_launch_create_volume_details(
  size_in_gbs: str,
  volume_creation_type: str,
  compartment_id: str = None,
  display_name: str = None,
  kms_key_id: str = None,
  vpus_per_gb: str = None
) -> None
```

###### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.sizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

###### `volume_creation_type`<sup>Required</sup> <a name="volume_creation_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.volumeCreationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

###### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

###### `vpus_per_gb`<sup>Optional</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.vpusPerGb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

##### `reset_device` <a name="reset_device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_in_transit_type` <a name="reset_encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType"></a>

```python
def reset_encryption_in_transit_type() -> None
```

##### `reset_is_agent_auto_iscsi_login_enabled` <a name="reset_is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled"></a>

```python
def reset_is_agent_auto_iscsi_login_enabled() -> None
```

##### `reset_is_pv_encryption_in_transit_enabled` <a name="reset_is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```python
def reset_is_pv_encryption_in_transit_enabled() -> None
```

##### `reset_is_read_only` <a name="reset_is_read_only" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly"></a>

```python
def reset_is_read_only() -> None
```

##### `reset_is_shareable` <a name="reset_is_shareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable"></a>

```python
def reset_is_shareable() -> None
```

##### `reset_launch_create_volume_details` <a name="reset_launch_create_volume_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails"></a>

```python
def reset_launch_create_volume_details() -> None
```

##### `reset_use_chap` <a name="reset_use_chap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap"></a>

```python
def reset_use_chap() -> None
```

##### `reset_volume_id` <a name="reset_volume_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId"></a>

```python
def reset_volume_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">launch_create_volume_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput">device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput">encryption_in_transit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput">is_agent_auto_iscsi_login_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput">is_pv_encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput">is_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput">is_shareable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput">launch_create_volume_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput">use_chap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">encryption_in_transit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">is_agent_auto_iscsi_login_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly">is_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable">is_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap">use_chap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_create_volume_details`<sup>Required</sup> <a name="launch_create_volume_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```python
launch_create_volume_details: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a>

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput"></a>

```python
device_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_in_transit_type_input`<sup>Optional</sup> <a name="encryption_in_transit_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput"></a>

```python
encryption_in_transit_type_input: str
```

- *Type:* str

---

##### `is_agent_auto_iscsi_login_enabled_input`<sup>Optional</sup> <a name="is_agent_auto_iscsi_login_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput"></a>

```python
is_agent_auto_iscsi_login_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```python
is_pv_encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_read_only_input`<sup>Optional</sup> <a name="is_read_only_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput"></a>

```python
is_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shareable_input`<sup>Optional</sup> <a name="is_shareable_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput"></a>

```python
is_shareable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `launch_create_volume_details_input`<sup>Optional</sup> <a name="launch_create_volume_details_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput"></a>

```python
launch_create_volume_details_input: CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `use_chap_input`<sup>Optional</sup> <a name="use_chap_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput"></a>

```python
use_chap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_in_transit_type`<sup>Required</sup> <a name="encryption_in_transit_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```python
encryption_in_transit_type: str
```

- *Type:* str

---

##### `is_agent_auto_iscsi_login_enabled`<sup>Required</sup> <a name="is_agent_auto_iscsi_login_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```python
is_agent_auto_iscsi_login_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```python
is_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shareable`<sup>Required</sup> <a name="is_shareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```python
is_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_chap`<sup>Required</sup> <a name="use_chap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```python
use_chap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreInstanceLaunchVolumeAttachments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>]

---


### CoreInstancePlatformConfigOutputReference <a name="CoreInstancePlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePlatformConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled">reset_are_virtual_instructions_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap">reset_config_map</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled">reset_is_access_control_service_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled">reset_is_input_output_memory_management_unit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled">reset_is_measured_boot_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled">reset_is_memory_encryption_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled">reset_is_secure_boot_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled">reset_is_symmetric_multi_threading_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled">reset_is_trusted_platform_module_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket">reset_numa_nodes_per_socket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled">reset_percentage_of_cores_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_are_virtual_instructions_enabled` <a name="reset_are_virtual_instructions_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled"></a>

```python
def reset_are_virtual_instructions_enabled() -> None
```

##### `reset_config_map` <a name="reset_config_map" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap"></a>

```python
def reset_config_map() -> None
```

##### `reset_is_access_control_service_enabled` <a name="reset_is_access_control_service_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled"></a>

```python
def reset_is_access_control_service_enabled() -> None
```

##### `reset_is_input_output_memory_management_unit_enabled` <a name="reset_is_input_output_memory_management_unit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled"></a>

```python
def reset_is_input_output_memory_management_unit_enabled() -> None
```

##### `reset_is_measured_boot_enabled` <a name="reset_is_measured_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled"></a>

```python
def reset_is_measured_boot_enabled() -> None
```

##### `reset_is_memory_encryption_enabled` <a name="reset_is_memory_encryption_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled"></a>

```python
def reset_is_memory_encryption_enabled() -> None
```

##### `reset_is_secure_boot_enabled` <a name="reset_is_secure_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled"></a>

```python
def reset_is_secure_boot_enabled() -> None
```

##### `reset_is_symmetric_multi_threading_enabled` <a name="reset_is_symmetric_multi_threading_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled"></a>

```python
def reset_is_symmetric_multi_threading_enabled() -> None
```

##### `reset_is_trusted_platform_module_enabled` <a name="reset_is_trusted_platform_module_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled"></a>

```python
def reset_is_trusted_platform_module_enabled() -> None
```

##### `reset_numa_nodes_per_socket` <a name="reset_numa_nodes_per_socket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket"></a>

```python
def reset_numa_nodes_per_socket() -> None
```

##### `reset_percentage_of_cores_enabled` <a name="reset_percentage_of_cores_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled"></a>

```python
def reset_percentage_of_cores_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput">are_virtual_instructions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput">config_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput">is_access_control_service_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput">is_input_output_memory_management_unit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput">is_measured_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput">is_memory_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput">is_secure_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput">is_symmetric_multi_threading_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput">is_trusted_platform_module_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput">numa_nodes_per_socket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput">percentage_of_cores_enabled_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled">are_virtual_instructions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap">config_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled">is_access_control_service_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">is_input_output_memory_management_unit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled">is_measured_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled">is_memory_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled">is_secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">is_symmetric_multi_threading_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">is_trusted_platform_module_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket">numa_nodes_per_socket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled">percentage_of_cores_enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_virtual_instructions_enabled_input`<sup>Optional</sup> <a name="are_virtual_instructions_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput"></a>

```python
are_virtual_instructions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_map_input`<sup>Optional</sup> <a name="config_map_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput"></a>

```python
config_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_access_control_service_enabled_input`<sup>Optional</sup> <a name="is_access_control_service_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput"></a>

```python
is_access_control_service_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_input_output_memory_management_unit_enabled_input`<sup>Optional</sup> <a name="is_input_output_memory_management_unit_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput"></a>

```python
is_input_output_memory_management_unit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_measured_boot_enabled_input`<sup>Optional</sup> <a name="is_measured_boot_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput"></a>

```python
is_measured_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_memory_encryption_enabled_input`<sup>Optional</sup> <a name="is_memory_encryption_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput"></a>

```python
is_memory_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure_boot_enabled_input`<sup>Optional</sup> <a name="is_secure_boot_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput"></a>

```python
is_secure_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_symmetric_multi_threading_enabled_input`<sup>Optional</sup> <a name="is_symmetric_multi_threading_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput"></a>

```python
is_symmetric_multi_threading_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_trusted_platform_module_enabled_input`<sup>Optional</sup> <a name="is_trusted_platform_module_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput"></a>

```python
is_trusted_platform_module_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numa_nodes_per_socket_input`<sup>Optional</sup> <a name="numa_nodes_per_socket_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput"></a>

```python
numa_nodes_per_socket_input: str
```

- *Type:* str

---

##### `percentage_of_cores_enabled_input`<sup>Optional</sup> <a name="percentage_of_cores_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput"></a>

```python
percentage_of_cores_enabled_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `are_virtual_instructions_enabled`<sup>Required</sup> <a name="are_virtual_instructions_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```python
are_virtual_instructions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_map`<sup>Required</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap"></a>

```python
config_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_access_control_service_enabled`<sup>Required</sup> <a name="is_access_control_service_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```python
is_access_control_service_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_input_output_memory_management_unit_enabled`<sup>Required</sup> <a name="is_input_output_memory_management_unit_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```python
is_input_output_memory_management_unit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_measured_boot_enabled`<sup>Required</sup> <a name="is_measured_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```python
is_measured_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_memory_encryption_enabled`<sup>Required</sup> <a name="is_memory_encryption_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```python
is_memory_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure_boot_enabled`<sup>Required</sup> <a name="is_secure_boot_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```python
is_secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_symmetric_multi_threading_enabled`<sup>Required</sup> <a name="is_symmetric_multi_threading_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```python
is_symmetric_multi_threading_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_trusted_platform_module_enabled`<sup>Required</sup> <a name="is_trusted_platform_module_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```python
is_trusted_platform_module_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `numa_nodes_per_socket`<sup>Required</sup> <a name="numa_nodes_per_socket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```python
numa_nodes_per_socket: str
```

- *Type:* str

---

##### `percentage_of_cores_enabled`<sup>Required</sup> <a name="percentage_of_cores_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```python
percentage_of_cores_enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---


### CoreInstancePreemptibleInstanceConfigOutputReference <a name="CoreInstancePreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction">put_preemption_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preemption_action` <a name="put_preemption_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction"></a>

```python
def put_preemption_action(
  type: str,
  preserve_boot_volume: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

###### `preserve_boot_volume`<sup>Optional</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.preserveBootVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction">preemption_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput">preemption_action_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```python
preemption_action: CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a>

---

##### `preemption_action_input`<sup>Optional</sup> <a name="preemption_action_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput"></a>

```python
preemption_action_input: CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---


### CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference <a name="CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume">reset_preserve_boot_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preserve_boot_volume` <a name="reset_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume"></a>

```python
def reset_preserve_boot_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput">preserve_boot_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preserve_boot_volume_input`<sup>Optional</sup> <a name="preserve_boot_volume_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput"></a>

```python
preserve_boot_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `preserve_boot_volume`<sup>Required</sup> <a name="preserve_boot_volume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```python
preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


### CoreInstanceShapeConfigOutputReference <a name="CoreInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization">reset_baseline_ocpu_utilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus">reset_vcpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_baseline_ocpu_utilization` <a name="reset_baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```python
def reset_baseline_ocpu_utilization() -> None
```

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```

##### `reset_vcpus` <a name="reset_vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus"></a>

```python
def reset_vcpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription">gpu_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus">gpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription">local_disk_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks">local_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments">max_vnic_attachments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baseline_ocpu_utilization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput">vcpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_description`<sup>Required</sup> <a name="gpu_description" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription"></a>

```python
gpu_description: str
```

- *Type:* str

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus"></a>

```python
gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disk_description`<sup>Required</sup> <a name="local_disk_description" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription"></a>

```python
local_disk_description: str
```

- *Type:* str

---

##### `local_disks`<sup>Required</sup> <a name="local_disks" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks"></a>

```python
local_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vnic_attachments`<sup>Required</sup> <a name="max_vnic_attachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments"></a>

```python
max_vnic_attachments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `baseline_ocpu_utilization_input`<sup>Optional</sup> <a name="baseline_ocpu_utilization_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```python
baseline_ocpu_utilization_input: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_input`<sup>Optional</sup> <a name="vcpus_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput"></a>

```python
vcpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `baseline_ocpu_utilization`<sup>Required</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---


### CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter">reset_defined_tags_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion">reset_operating_system_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_defined_tags_filter` <a name="reset_defined_tags_filter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter"></a>

```python
def reset_defined_tags_filter() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_operating_system_version` <a name="reset_operating_system_version" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion"></a>

```python
def reset_operating_system_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput">defined_tags_filter_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput">operating_system_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">defined_tags_filter</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">operating_system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_filter_input`<sup>Optional</sup> <a name="defined_tags_filter_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput"></a>

```python
defined_tags_filter_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `operating_system_version_input`<sup>Optional</sup> <a name="operating_system_version_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput"></a>

```python
operating_system_version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags_filter`<sup>Required</sup> <a name="defined_tags_filter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```python
defined_tags_filter: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `operating_system_version`<sup>Required</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```python
operating_system_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---


### CoreInstanceSourceDetailsOutputReference <a name="CoreInstanceSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails">put_instance_source_image_filter_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs">reset_boot_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb">reset_boot_volume_vpus_per_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails">reset_instance_source_image_filter_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled">reset_is_preserve_boot_volume_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instance_source_image_filter_details` <a name="put_instance_source_image_filter_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails"></a>

```python
def put_instance_source_image_filter_details(
  compartment_id: str,
  defined_tags_filter: typing.Mapping[str] = None,
  operating_system: str = None,
  operating_system_version: str = None
) -> None
```

###### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

###### `defined_tags_filter`<sup>Optional</sup> <a name="defined_tags_filter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.definedTagsFilter"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

###### `operating_system`<sup>Optional</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.operatingSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

###### `operating_system_version`<sup>Optional</sup> <a name="operating_system_version" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.operatingSystemVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

##### `reset_boot_volume_size_in_gbs` <a name="reset_boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```python
def reset_boot_volume_size_in_gbs() -> None
```

##### `reset_boot_volume_vpus_per_gb` <a name="reset_boot_volume_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb"></a>

```python
def reset_boot_volume_vpus_per_gb() -> None
```

##### `reset_instance_source_image_filter_details` <a name="reset_instance_source_image_filter_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails"></a>

```python
def reset_instance_source_image_filter_details() -> None
```

##### `reset_is_preserve_boot_volume_enabled` <a name="reset_is_preserve_boot_volume_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled"></a>

```python
def reset_is_preserve_boot_volume_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">instance_source_image_filter_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">boot_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput">boot_volume_vpus_per_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput">instance_source_image_filter_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput">is_preserve_boot_volume_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs">boot_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb">boot_volume_vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">is_preserve_boot_volume_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_source_image_filter_details`<sup>Required</sup> <a name="instance_source_image_filter_details" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```python
instance_source_image_filter_details: CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a>

---

##### `boot_volume_size_in_gbs_input`<sup>Optional</sup> <a name="boot_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```python
boot_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `boot_volume_vpus_per_gb_input`<sup>Optional</sup> <a name="boot_volume_vpus_per_gb_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput"></a>

```python
boot_volume_vpus_per_gb_input: str
```

- *Type:* str

---

##### `instance_source_image_filter_details_input`<sup>Optional</sup> <a name="instance_source_image_filter_details_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput"></a>

```python
instance_source_image_filter_details_input: CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `is_preserve_boot_volume_enabled_input`<sup>Optional</sup> <a name="is_preserve_boot_volume_enabled_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput"></a>

```python
is_preserve_boot_volume_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `boot_volume_size_in_gbs`<sup>Required</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```python
boot_volume_size_in_gbs: str
```

- *Type:* str

---

##### `boot_volume_vpus_per_gb`<sup>Required</sup> <a name="boot_volume_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```python
boot_volume_vpus_per_gb: str
```

- *Type:* str

---

##### `is_preserve_boot_volume_enabled`<sup>Required</sup> <a name="is_preserve_boot_volume_enabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```python
is_preserve_boot_volume_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---


### CoreInstanceTimeoutsOutputReference <a name="CoreInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance

coreInstance.CoreInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>]

---



