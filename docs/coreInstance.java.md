# `coreInstance` Submodule <a name="`coreInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstance <a name="CoreInstance" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance oci_core_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstance;

CoreInstance.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .agentConfig(CoreInstanceAgentConfig)
//  .async(java.lang.Boolean)
//  .async(IResolvable)
//  .availabilityConfig(CoreInstanceAvailabilityConfig)
//  .capacityReservationId(java.lang.String)
//  .clusterPlacementGroupId(java.lang.String)
//  .computeClusterId(java.lang.String)
//  .createVnicDetails(CoreInstanceCreateVnicDetails)
//  .dedicatedVmHostId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .extendedMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .image(java.lang.String)
//  .instanceConfigurationId(java.lang.String)
//  .instanceOptions(CoreInstanceInstanceOptions)
//  .ipxeScript(java.lang.String)
//  .isPvEncryptionInTransitEnabled(java.lang.Boolean)
//  .isPvEncryptionInTransitEnabled(IResolvable)
//  .launchOptions(CoreInstanceLaunchOptions)
//  .launchVolumeAttachments(IResolvable)
//  .launchVolumeAttachments(java.util.List<CoreInstanceLaunchVolumeAttachments>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .platformConfig(CoreInstancePlatformConfig)
//  .preemptibleInstanceConfig(CoreInstancePreemptibleInstanceConfig)
//  .preserveBootVolume(java.lang.Boolean)
//  .preserveBootVolume(IResolvable)
//  .preserveDataVolumesCreatedAtLaunch(java.lang.Boolean)
//  .preserveDataVolumesCreatedAtLaunch(IResolvable)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .shape(java.lang.String)
//  .shapeConfig(CoreInstanceShapeConfig)
//  .sourceDetails(CoreInstanceSourceDetails)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(CoreInstanceTimeouts)
//  .updateOperationConstraint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.agentConfig">agentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.async">async</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityConfig">availabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.extendedMetadata">extendedMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceOptions">instanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.ipxeScript">ipxeScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchOptions">launchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchVolumeAttachments">launchVolumeAttachments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>></code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.platformConfig">platformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preemptibleInstanceConfig">preemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveBootVolume">preserveBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveDataVolumesCreatedAtLaunch">preserveDataVolumesCreatedAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.updateOperationConstraint">updateOperationConstraint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `agentConfig`<sup>Optional</sup> <a name="agentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.agentConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `async`<sup>Optional</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.async"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `availabilityConfig`<sup>Optional</sup> <a name="availabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.availabilityConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.capacityReservationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `clusterPlacementGroupId`<sup>Optional</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `computeClusterId`<sup>Optional</sup> <a name="computeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.computeClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `createVnicDetails`<sup>Optional</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.createVnicDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `dedicatedVmHostId`<sup>Optional</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.dedicatedVmHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `extendedMetadata`<sup>Optional</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.extendedMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.faultDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.hostnameLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.image"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `instanceConfigurationId`<sup>Optional</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `instanceOptions`<sup>Optional</sup> <a name="instanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.instanceOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `ipxeScript`<sup>Optional</sup> <a name="ipxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.ipxeScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.isPvEncryptionInTransitEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `launchOptions`<sup>Optional</sup> <a name="launchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `launchVolumeAttachments`<sup>Optional</sup> <a name="launchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.launchVolumeAttachments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>>

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `platformConfig`<sup>Optional</sup> <a name="platformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.platformConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `preemptibleInstanceConfig`<sup>Optional</sup> <a name="preemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preemptibleInstanceConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `preserveBootVolume`<sup>Optional</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveBootVolume"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `preserveDataVolumesCreatedAtLaunch`<sup>Optional</sup> <a name="preserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.preserveDataVolumesCreatedAtLaunch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.securityAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `updateOperationConstraint`<sup>Optional</sup> <a name="updateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.updateOperationConstraint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig">putAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig">putAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails">putCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions">putInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions">putLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments">putLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig">putPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig">putPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig">resetAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync">resetAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig">resetAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId">resetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId">resetComputeClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails">resetCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId">resetDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata">resetExtendedMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId">resetInstanceConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions">resetInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript">resetIpxeScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions">resetLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments">resetLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig">resetPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig">resetPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume">resetPreserveBootVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch">resetPreserveDataVolumesCreatedAtLaunch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig">resetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint">resetUpdateOperationConstraint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentConfig` <a name="putAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig"></a>

```java
public void putAgentConfig(CoreInstanceAgentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `putAvailabilityConfig` <a name="putAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig"></a>

```java
public void putAvailabilityConfig(CoreInstanceAvailabilityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `putCreateVnicDetails` <a name="putCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails"></a>

```java
public void putCreateVnicDetails(CoreInstanceCreateVnicDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `putInstanceOptions` <a name="putInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions"></a>

```java
public void putInstanceOptions(CoreInstanceInstanceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `putLaunchOptions` <a name="putLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions"></a>

```java
public void putLaunchOptions(CoreInstanceLaunchOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `putLaunchVolumeAttachments` <a name="putLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments"></a>

```java
public void putLaunchVolumeAttachments(IResolvable OR java.util.List<CoreInstanceLaunchVolumeAttachments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>>

---

##### `putPlatformConfig` <a name="putPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig"></a>

```java
public void putPlatformConfig(CoreInstancePlatformConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `putPreemptibleInstanceConfig` <a name="putPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig"></a>

```java
public void putPreemptibleInstanceConfig(CoreInstancePreemptibleInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig"></a>

```java
public void putShapeConfig(CoreInstanceShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails"></a>

```java
public void putSourceDetails(CoreInstanceSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts"></a>

```java
public void putTimeouts(CoreInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `resetAgentConfig` <a name="resetAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig"></a>

```java
public void resetAgentConfig()
```

##### `resetAsync` <a name="resetAsync" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync"></a>

```java
public void resetAsync()
```

##### `resetAvailabilityConfig` <a name="resetAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig"></a>

```java
public void resetAvailabilityConfig()
```

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetClusterPlacementGroupId` <a name="resetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId"></a>

```java
public void resetClusterPlacementGroupId()
```

##### `resetComputeClusterId` <a name="resetComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId"></a>

```java
public void resetComputeClusterId()
```

##### `resetCreateVnicDetails` <a name="resetCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails"></a>

```java
public void resetCreateVnicDetails()
```

##### `resetDedicatedVmHostId` <a name="resetDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId"></a>

```java
public void resetDedicatedVmHostId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExtendedMetadata` <a name="resetExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata"></a>

```java
public void resetExtendedMetadata()
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain"></a>

```java
public void resetFaultDomain()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId"></a>

```java
public void resetId()
```

##### `resetImage` <a name="resetImage" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage"></a>

```java
public void resetImage()
```

##### `resetInstanceConfigurationId` <a name="resetInstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId"></a>

```java
public void resetInstanceConfigurationId()
```

##### `resetInstanceOptions` <a name="resetInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions"></a>

```java
public void resetInstanceOptions()
```

##### `resetIpxeScript` <a name="resetIpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript"></a>

```java
public void resetIpxeScript()
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled"></a>

```java
public void resetIsPvEncryptionInTransitEnabled()
```

##### `resetLaunchOptions` <a name="resetLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions"></a>

```java
public void resetLaunchOptions()
```

##### `resetLaunchVolumeAttachments` <a name="resetLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments"></a>

```java
public void resetLaunchVolumeAttachments()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPlatformConfig` <a name="resetPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig"></a>

```java
public void resetPlatformConfig()
```

##### `resetPreemptibleInstanceConfig` <a name="resetPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig"></a>

```java
public void resetPreemptibleInstanceConfig()
```

##### `resetPreserveBootVolume` <a name="resetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume"></a>

```java
public void resetPreserveBootVolume()
```

##### `resetPreserveDataVolumesCreatedAtLaunch` <a name="resetPreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch"></a>

```java
public void resetPreserveDataVolumesCreatedAtLaunch()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape"></a>

```java
public void resetShape()
```

##### `resetShapeConfig` <a name="resetShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig"></a>

```java
public void resetShapeConfig()
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails"></a>

```java
public void resetSourceDetails()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState"></a>

```java
public void resetState()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpdateOperationConstraint` <a name="resetUpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint"></a>

```java
public void resetUpdateOperationConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstance;

CoreInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstance;

CoreInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstance;

CoreInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstance;

CoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig">agentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig">availabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId">bootVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions">instanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode">isCrossNumaNode</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode">launchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions">launchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments">launchVolumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig">platformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig">preemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState">securityAttributesState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue">timeMaintenanceRebootDue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput">agentConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput">asyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput">availabilityConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput">clusterPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput">computeClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput">createVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput">dedicatedVmHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput">extendedMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput">faultDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput">instanceConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput">instanceOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput">ipxeScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput">launchOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput">launchVolumeAttachmentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput">platformConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput">preemptibleInstanceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput">preserveBootVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput">preserveDataVolumesCreatedAtLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput">updateOperationConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async">async</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata">extendedMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript">ipxeScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume">preserveBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch">preserveDataVolumesCreatedAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint">updateOperationConstraint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentConfig`<sup>Required</sup> <a name="agentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig"></a>

```java
public CoreInstanceAgentConfigOutputReference getAgentConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a>

---

##### `availabilityConfig`<sup>Required</sup> <a name="availabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig"></a>

```java
public CoreInstanceAvailabilityConfigOutputReference getAvailabilityConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a>

---

##### `bootVolumeId`<sup>Required</sup> <a name="bootVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId"></a>

```java
public java.lang.String getBootVolumeId();
```

- *Type:* java.lang.String

---

##### `createVnicDetails`<sup>Required</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails"></a>

```java
public CoreInstanceCreateVnicDetailsOutputReference getCreateVnicDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a>

---

##### `instanceOptions`<sup>Required</sup> <a name="instanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions"></a>

```java
public CoreInstanceInstanceOptionsOutputReference getInstanceOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a>

---

##### `isCrossNumaNode`<sup>Required</sup> <a name="isCrossNumaNode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode"></a>

```java
public IResolvable getIsCrossNumaNode();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `launchMode`<sup>Required</sup> <a name="launchMode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode"></a>

```java
public java.lang.String getLaunchMode();
```

- *Type:* java.lang.String

---

##### `launchOptions`<sup>Required</sup> <a name="launchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions"></a>

```java
public CoreInstanceLaunchOptionsOutputReference getLaunchOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a>

---

##### `launchVolumeAttachments`<sup>Required</sup> <a name="launchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsList getLaunchVolumeAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a>

---

##### `platformConfig`<sup>Required</sup> <a name="platformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig"></a>

```java
public CoreInstancePlatformConfigOutputReference getPlatformConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a>

---

##### `preemptibleInstanceConfig`<sup>Required</sup> <a name="preemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig"></a>

```java
public CoreInstancePreemptibleInstanceConfigOutputReference getPreemptibleInstanceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityAttributesState`<sup>Required</sup> <a name="securityAttributesState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState"></a>

```java
public java.lang.String getSecurityAttributesState();
```

- *Type:* java.lang.String

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig"></a>

```java
public CoreInstanceShapeConfigOutputReference getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a>

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails"></a>

```java
public CoreInstanceSourceDetailsOutputReference getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceRebootDue`<sup>Required</sup> <a name="timeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue"></a>

```java
public java.lang.String getTimeMaintenanceRebootDue();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts"></a>

```java
public CoreInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a>

---

##### `agentConfigInput`<sup>Optional</sup> <a name="agentConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput"></a>

```java
public CoreInstanceAgentConfig getAgentConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `asyncInput`<sup>Optional</sup> <a name="asyncInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput"></a>

```java
public java.lang.Object getAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityConfigInput`<sup>Optional</sup> <a name="availabilityConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput"></a>

```java
public CoreInstanceAvailabilityConfig getAvailabilityConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupIdInput`<sup>Optional</sup> <a name="clusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput"></a>

```java
public java.lang.String getClusterPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeClusterIdInput`<sup>Optional</sup> <a name="computeClusterIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput"></a>

```java
public java.lang.String getComputeClusterIdInput();
```

- *Type:* java.lang.String

---

##### `createVnicDetailsInput`<sup>Optional</sup> <a name="createVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput"></a>

```java
public CoreInstanceCreateVnicDetails getCreateVnicDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `dedicatedVmHostIdInput`<sup>Optional</sup> <a name="dedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput"></a>

```java
public java.lang.String getDedicatedVmHostIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `extendedMetadataInput`<sup>Optional</sup> <a name="extendedMetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput"></a>

```java
public java.lang.String getFaultDomainInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationIdInput`<sup>Optional</sup> <a name="instanceConfigurationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput"></a>

```java
public java.lang.String getInstanceConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `instanceOptionsInput`<sup>Optional</sup> <a name="instanceOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput"></a>

```java
public CoreInstanceInstanceOptions getInstanceOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `ipxeScriptInput`<sup>Optional</sup> <a name="ipxeScriptInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput"></a>

```java
public java.lang.String getIpxeScriptInput();
```

- *Type:* java.lang.String

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `launchOptionsInput`<sup>Optional</sup> <a name="launchOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput"></a>

```java
public CoreInstanceLaunchOptions getLaunchOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `launchVolumeAttachmentsInput`<sup>Optional</sup> <a name="launchVolumeAttachmentsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput"></a>

```java
public java.lang.Object getLaunchVolumeAttachmentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `platformConfigInput`<sup>Optional</sup> <a name="platformConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput"></a>

```java
public CoreInstancePlatformConfig getPlatformConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `preemptibleInstanceConfigInput`<sup>Optional</sup> <a name="preemptibleInstanceConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput"></a>

```java
public CoreInstancePreemptibleInstanceConfig getPreemptibleInstanceConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `preserveBootVolumeInput`<sup>Optional</sup> <a name="preserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput"></a>

```java
public java.lang.Object getPreserveBootVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preserveDataVolumesCreatedAtLaunchInput`<sup>Optional</sup> <a name="preserveDataVolumesCreatedAtLaunchInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput"></a>

```java
public java.lang.Object getPreserveDataVolumesCreatedAtLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput"></a>

```java
public CoreInstanceShapeConfig getShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput"></a>

```java
public CoreInstanceSourceDetails getSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `updateOperationConstraintInput`<sup>Optional</sup> <a name="updateOperationConstraintInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput"></a>

```java
public java.lang.String getUpdateOperationConstraintInput();
```

- *Type:* java.lang.String

---

##### `async`<sup>Required</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async"></a>

```java
public java.lang.Object getAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeClusterId`<sup>Required</sup> <a name="computeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

---

##### `dedicatedVmHostId`<sup>Required</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId"></a>

```java
public java.lang.String getDedicatedVmHostId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `extendedMetadata`<sup>Required</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

---

##### `ipxeScript`<sup>Required</sup> <a name="ipxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript"></a>

```java
public java.lang.String getIpxeScript();
```

- *Type:* java.lang.String

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `preserveBootVolume`<sup>Required</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume"></a>

```java
public java.lang.Object getPreserveBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preserveDataVolumesCreatedAtLaunch`<sup>Required</sup> <a name="preserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch"></a>

```java
public java.lang.Object getPreserveDataVolumesCreatedAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `updateOperationConstraint`<sup>Required</sup> <a name="updateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint"></a>

```java
public java.lang.String getUpdateOperationConstraint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceAgentConfig <a name="CoreInstanceAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAgentConfig;

CoreInstanceAgentConfig.builder()
//  .areAllPluginsDisabled(java.lang.Boolean)
//  .areAllPluginsDisabled(IResolvable)
//  .isManagementDisabled(java.lang.Boolean)
//  .isManagementDisabled(IResolvable)
//  .isMonitoringDisabled(java.lang.Boolean)
//  .isMonitoringDisabled(IResolvable)
//  .pluginsConfig(IResolvable)
//  .pluginsConfig(java.util.List<CoreInstanceAgentConfigPluginsConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled">areAllPluginsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled">isManagementDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled">isMonitoringDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig">pluginsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>></code> | plugins_config block. |

---

##### `areAllPluginsDisabled`<sup>Optional</sup> <a name="areAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled"></a>

```java
public java.lang.Object getAreAllPluginsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

##### `isManagementDisabled`<sup>Optional</sup> <a name="isManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled"></a>

```java
public java.lang.Object getIsManagementDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

##### `isMonitoringDisabled`<sup>Optional</sup> <a name="isMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled"></a>

```java
public java.lang.Object getIsMonitoringDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

##### `pluginsConfig`<sup>Optional</sup> <a name="pluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig"></a>

```java
public java.lang.Object getPluginsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>>

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

### CoreInstanceAgentConfigPluginsConfig <a name="CoreInstanceAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAgentConfigPluginsConfig;

CoreInstanceAgentConfigPluginsConfig.builder()
    .desiredState(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}. |

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}.

---

### CoreInstanceAvailabilityConfig <a name="CoreInstanceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAvailabilityConfig;

CoreInstanceAvailabilityConfig.builder()
//  .isLiveMigrationPreferred(java.lang.Boolean)
//  .isLiveMigrationPreferred(IResolvable)
//  .recoveryAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred">isLiveMigrationPreferred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction">recoveryAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}. |

---

##### `isLiveMigrationPreferred`<sup>Optional</sup> <a name="isLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred"></a>

```java
public java.lang.Object getIsLiveMigrationPreferred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

##### `recoveryAction`<sup>Optional</sup> <a name="recoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction"></a>

```java
public java.lang.String getRecoveryAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

### CoreInstanceConfig <a name="CoreInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceConfig;

CoreInstanceConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .agentConfig(CoreInstanceAgentConfig)
//  .async(java.lang.Boolean)
//  .async(IResolvable)
//  .availabilityConfig(CoreInstanceAvailabilityConfig)
//  .capacityReservationId(java.lang.String)
//  .clusterPlacementGroupId(java.lang.String)
//  .computeClusterId(java.lang.String)
//  .createVnicDetails(CoreInstanceCreateVnicDetails)
//  .dedicatedVmHostId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .extendedMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .faultDomain(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .id(java.lang.String)
//  .image(java.lang.String)
//  .instanceConfigurationId(java.lang.String)
//  .instanceOptions(CoreInstanceInstanceOptions)
//  .ipxeScript(java.lang.String)
//  .isPvEncryptionInTransitEnabled(java.lang.Boolean)
//  .isPvEncryptionInTransitEnabled(IResolvable)
//  .launchOptions(CoreInstanceLaunchOptions)
//  .launchVolumeAttachments(IResolvable)
//  .launchVolumeAttachments(java.util.List<CoreInstanceLaunchVolumeAttachments>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .platformConfig(CoreInstancePlatformConfig)
//  .preemptibleInstanceConfig(CoreInstancePreemptibleInstanceConfig)
//  .preserveBootVolume(java.lang.Boolean)
//  .preserveBootVolume(IResolvable)
//  .preserveDataVolumesCreatedAtLaunch(java.lang.Boolean)
//  .preserveDataVolumesCreatedAtLaunch(IResolvable)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .shape(java.lang.String)
//  .shapeConfig(CoreInstanceShapeConfig)
//  .sourceDetails(CoreInstanceSourceDetails)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
//  .timeouts(CoreInstanceTimeouts)
//  .updateOperationConstraint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig">agentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async">async</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig">availabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId">computeClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails">createVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId">dedicatedVmHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata">extendedMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions">instanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript">ipxeScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions">launchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments">launchVolumeAttachments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>></code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig">platformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig">preemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume">preserveBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch">preserveDataVolumesCreatedAtLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint">updateOperationConstraint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `agentConfig`<sup>Optional</sup> <a name="agentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig"></a>

```java
public CoreInstanceAgentConfig getAgentConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `async`<sup>Optional</sup> <a name="async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async"></a>

```java
public java.lang.Object getAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `availabilityConfig`<sup>Optional</sup> <a name="availabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig"></a>

```java
public CoreInstanceAvailabilityConfig getAvailabilityConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `clusterPlacementGroupId`<sup>Optional</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `computeClusterId`<sup>Optional</sup> <a name="computeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId"></a>

```java
public java.lang.String getComputeClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `createVnicDetails`<sup>Optional</sup> <a name="createVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails"></a>

```java
public CoreInstanceCreateVnicDetails getCreateVnicDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `dedicatedVmHostId`<sup>Optional</sup> <a name="dedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId"></a>

```java
public java.lang.String getDedicatedVmHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `extendedMetadata`<sup>Optional</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendedMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `instanceConfigurationId`<sup>Optional</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `instanceOptions`<sup>Optional</sup> <a name="instanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions"></a>

```java
public CoreInstanceInstanceOptions getInstanceOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `ipxeScript`<sup>Optional</sup> <a name="ipxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript"></a>

```java
public java.lang.String getIpxeScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `launchOptions`<sup>Optional</sup> <a name="launchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions"></a>

```java
public CoreInstanceLaunchOptions getLaunchOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `launchVolumeAttachments`<sup>Optional</sup> <a name="launchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments"></a>

```java
public java.lang.Object getLaunchVolumeAttachments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>>

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `platformConfig`<sup>Optional</sup> <a name="platformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig"></a>

```java
public CoreInstancePlatformConfig getPlatformConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `preemptibleInstanceConfig`<sup>Optional</sup> <a name="preemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig"></a>

```java
public CoreInstancePreemptibleInstanceConfig getPreemptibleInstanceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `preserveBootVolume`<sup>Optional</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume"></a>

```java
public java.lang.Object getPreserveBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `preserveDataVolumesCreatedAtLaunch`<sup>Optional</sup> <a name="preserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch"></a>

```java
public java.lang.Object getPreserveDataVolumesCreatedAtLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `shapeConfig`<sup>Optional</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig"></a>

```java
public CoreInstanceShapeConfig getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails"></a>

```java
public CoreInstanceSourceDetails getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts"></a>

```java
public CoreInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `updateOperationConstraint`<sup>Optional</sup> <a name="updateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint"></a>

```java
public java.lang.String getUpdateOperationConstraint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

### CoreInstanceCreateVnicDetails <a name="CoreInstanceCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceCreateVnicDetails;

CoreInstanceCreateVnicDetails.builder()
//  .assignIpv6Ip(java.lang.Boolean)
//  .assignIpv6Ip(IResolvable)
//  .assignPrivateDnsRecord(java.lang.Boolean)
//  .assignPrivateDnsRecord(IResolvable)
//  .assignPublicIp(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostnameLabel(java.lang.String)
//  .ipv6AddressIpv6SubnetCidrPairDetails(IResolvable)
//  .ipv6AddressIpv6SubnetCidrPairDetails(java.util.List<CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .securityAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .skipSourceDestCheck(java.lang.Boolean)
//  .skipSourceDestCheck(IResolvable)
//  .subnetId(java.lang.String)
//  .vlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}. |

---

##### `assignIpv6Ip`<sup>Optional</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip"></a>

```java
public java.lang.Object getAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

##### `assignPrivateDnsRecord`<sup>Optional</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```java
public java.lang.Object getAssignPrivateDnsRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `skipSourceDestCheck`<sup>Optional</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails;

CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.builder()
//  .ipv6Address(java.lang.String)
//  .ipv6SubnetCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}.

---

##### `ipv6SubnetCidr`<sup>Optional</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}.

---

### CoreInstanceInstanceOptions <a name="CoreInstanceInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceInstanceOptions;

CoreInstanceInstanceOptions.builder()
//  .areLegacyImdsEndpointsDisabled(java.lang.Boolean)
//  .areLegacyImdsEndpointsDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled">areLegacyImdsEndpointsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}. |

---

##### `areLegacyImdsEndpointsDisabled`<sup>Optional</sup> <a name="areLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled"></a>

```java
public java.lang.Object getAreLegacyImdsEndpointsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

### CoreInstanceLaunchOptions <a name="CoreInstanceLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchOptions;

CoreInstanceLaunchOptions.builder()
//  .bootVolumeType(java.lang.String)
//  .firmware(java.lang.String)
//  .isConsistentVolumeNamingEnabled(java.lang.Boolean)
//  .isConsistentVolumeNamingEnabled(IResolvable)
//  .isPvEncryptionInTransitEnabled(java.lang.Boolean)
//  .isPvEncryptionInTransitEnabled(IResolvable)
//  .networkType(java.lang.String)
//  .remoteDataVolumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType">bootVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware">firmware</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled">isConsistentVolumeNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType">remoteDataVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}. |

---

##### `bootVolumeType`<sup>Optional</sup> <a name="bootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType"></a>

```java
public java.lang.String getBootVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

##### `isConsistentVolumeNamingEnabled`<sup>Optional</sup> <a name="isConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled"></a>

```java
public java.lang.Object getIsConsistentVolumeNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

##### `remoteDataVolumeType`<sup>Optional</sup> <a name="remoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType"></a>

```java
public java.lang.String getRemoteDataVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

### CoreInstanceLaunchVolumeAttachments <a name="CoreInstanceLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchVolumeAttachments;

CoreInstanceLaunchVolumeAttachments.builder()
    .type(java.lang.String)
//  .device(java.lang.String)
//  .displayName(java.lang.String)
//  .encryptionInTransitType(java.lang.String)
//  .isAgentAutoIscsiLoginEnabled(java.lang.Boolean)
//  .isAgentAutoIscsiLoginEnabled(IResolvable)
//  .isPvEncryptionInTransitEnabled(java.lang.Boolean)
//  .isPvEncryptionInTransitEnabled(IResolvable)
//  .isReadOnly(java.lang.Boolean)
//  .isReadOnly(IResolvable)
//  .isShareable(java.lang.Boolean)
//  .isShareable(IResolvable)
//  .launchCreateVolumeDetails(CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails)
//  .useChap(java.lang.Boolean)
//  .useChap(IResolvable)
//  .volumeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device">device</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType">encryptionInTransitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled">isAgentAutoIscsiLoginEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable">isShareable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails">launchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | launch_create_volume_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap">useChap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `device`<sup>Optional</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `encryptionInTransitType`<sup>Optional</sup> <a name="encryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType"></a>

```java
public java.lang.String getEncryptionInTransitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}.

---

##### `isAgentAutoIscsiLoginEnabled`<sup>Optional</sup> <a name="isAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled"></a>

```java
public java.lang.Object getIsAgentAutoIscsiLoginEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly"></a>

```java
public java.lang.Object getIsReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}.

---

##### `isShareable`<sup>Optional</sup> <a name="isShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable"></a>

```java
public java.lang.Object getIsShareable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}.

---

##### `launchCreateVolumeDetails`<sup>Optional</sup> <a name="launchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails getLaunchCreateVolumeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

launch_create_volume_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}

---

##### `useChap`<sup>Optional</sup> <a name="useChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap"></a>

```java
public java.lang.Object getUseChap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}.

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}.

---

### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails;

CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.builder()
    .sizeInGbs(java.lang.String)
    .volumeCreationType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .vpusPerGb(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType">volumeCreationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb">vpusPerGb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}. |

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

##### `volumeCreationType`<sup>Required</sup> <a name="volumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType"></a>

```java
public java.lang.String getVolumeCreationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `vpusPerGb`<sup>Optional</sup> <a name="vpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb"></a>

```java
public java.lang.String getVpusPerGb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

### CoreInstancePlatformConfig <a name="CoreInstancePlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePlatformConfig;

CoreInstancePlatformConfig.builder()
    .type(java.lang.String)
//  .areVirtualInstructionsEnabled(java.lang.Boolean)
//  .areVirtualInstructionsEnabled(IResolvable)
//  .configMap(java.util.Map<java.lang.String, java.lang.String>)
//  .isAccessControlServiceEnabled(java.lang.Boolean)
//  .isAccessControlServiceEnabled(IResolvable)
//  .isInputOutputMemoryManagementUnitEnabled(java.lang.Boolean)
//  .isInputOutputMemoryManagementUnitEnabled(IResolvable)
//  .isMeasuredBootEnabled(java.lang.Boolean)
//  .isMeasuredBootEnabled(IResolvable)
//  .isMemoryEncryptionEnabled(java.lang.Boolean)
//  .isMemoryEncryptionEnabled(IResolvable)
//  .isSecureBootEnabled(java.lang.Boolean)
//  .isSecureBootEnabled(IResolvable)
//  .isSymmetricMultiThreadingEnabled(java.lang.Boolean)
//  .isSymmetricMultiThreadingEnabled(IResolvable)
//  .isTrustedPlatformModuleEnabled(java.lang.Boolean)
//  .isTrustedPlatformModuleEnabled(IResolvable)
//  .numaNodesPerSocket(java.lang.String)
//  .percentageOfCoresEnabled(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled">areVirtualInstructionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap">configMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled">isAccessControlServiceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled">isInputOutputMemoryManagementUnitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled">isMeasuredBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled">isMemoryEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled">isSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled">isSymmetricMultiThreadingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled">isTrustedPlatformModuleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket">numaNodesPerSocket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled">percentageOfCoresEnabled</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `areVirtualInstructionsEnabled`<sup>Optional</sup> <a name="areVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled"></a>

```java
public java.lang.Object getAreVirtualInstructionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

##### `configMap`<sup>Optional</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

##### `isAccessControlServiceEnabled`<sup>Optional</sup> <a name="isAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled"></a>

```java
public java.lang.Object getIsAccessControlServiceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

##### `isInputOutputMemoryManagementUnitEnabled`<sup>Optional</sup> <a name="isInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled"></a>

```java
public java.lang.Object getIsInputOutputMemoryManagementUnitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

##### `isMeasuredBootEnabled`<sup>Optional</sup> <a name="isMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled"></a>

```java
public java.lang.Object getIsMeasuredBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

##### `isMemoryEncryptionEnabled`<sup>Optional</sup> <a name="isMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled"></a>

```java
public java.lang.Object getIsMemoryEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

##### `isSecureBootEnabled`<sup>Optional</sup> <a name="isSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled"></a>

```java
public java.lang.Object getIsSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

##### `isSymmetricMultiThreadingEnabled`<sup>Optional</sup> <a name="isSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled"></a>

```java
public java.lang.Object getIsSymmetricMultiThreadingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

##### `isTrustedPlatformModuleEnabled`<sup>Optional</sup> <a name="isTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled"></a>

```java
public java.lang.Object getIsTrustedPlatformModuleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

##### `numaNodesPerSocket`<sup>Optional</sup> <a name="numaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket"></a>

```java
public java.lang.String getNumaNodesPerSocket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

##### `percentageOfCoresEnabled`<sup>Optional</sup> <a name="percentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled"></a>

```java
public java.lang.Number getPercentageOfCoresEnabled();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

### CoreInstancePreemptibleInstanceConfig <a name="CoreInstancePreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePreemptibleInstanceConfig;

CoreInstancePreemptibleInstanceConfig.builder()
    .preemptionAction(CoreInstancePreemptibleInstanceConfigPreemptionAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction"></a>

```java
public CoreInstancePreemptibleInstanceConfigPreemptionAction getPreemptionAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

### CoreInstancePreemptibleInstanceConfigPreemptionAction <a name="CoreInstancePreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePreemptibleInstanceConfigPreemptionAction;

CoreInstancePreemptibleInstanceConfigPreemptionAction.builder()
    .type(java.lang.String)
//  .preserveBootVolume(java.lang.Boolean)
//  .preserveBootVolume(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume">preserveBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `preserveBootVolume`<sup>Optional</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume"></a>

```java
public java.lang.Object getPreserveBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

### CoreInstanceShapeConfig <a name="CoreInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceShapeConfig;

CoreInstanceShapeConfig.builder()
//  .baselineOcpuUtilization(java.lang.String)
//  .memoryInGbs(java.lang.Number)
//  .nvmes(java.lang.Number)
//  .ocpus(java.lang.Number)
//  .vcpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes">nvmes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus">vcpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}. |

---

##### `baselineOcpuUtilization`<sup>Optional</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization"></a>

```java
public java.lang.String getBaselineOcpuUtilization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes"></a>

```java
public java.lang.Number getNvmes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus"></a>

```java
public java.lang.Number getVcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

### CoreInstanceSourceDetails <a name="CoreInstanceSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceSourceDetails;

CoreInstanceSourceDetails.builder()
    .sourceType(java.lang.String)
//  .bootVolumeSizeInGbs(java.lang.String)
//  .bootVolumeVpusPerGb(java.lang.String)
//  .instanceSourceImageFilterDetails(CoreInstanceSourceDetailsInstanceSourceImageFilterDetails)
//  .isPreserveBootVolumeEnabled(java.lang.Boolean)
//  .isPreserveBootVolumeEnabled(IResolvable)
//  .kmsKeyId(java.lang.String)
//  .sourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb">bootVolumeVpusPerGb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails">instanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | instance_source_image_filter_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled">isPreserveBootVolumeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

##### `bootVolumeSizeInGbs`<sup>Optional</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs"></a>

```java
public java.lang.String getBootVolumeSizeInGbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

##### `bootVolumeVpusPerGb`<sup>Optional</sup> <a name="bootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb"></a>

```java
public java.lang.String getBootVolumeVpusPerGb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

##### `instanceSourceImageFilterDetails`<sup>Optional</sup> <a name="instanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails"></a>

```java
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails getInstanceSourceImageFilterDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

##### `isPreserveBootVolumeEnabled`<sup>Optional</sup> <a name="isPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled"></a>

```java
public java.lang.Object getIsPreserveBootVolumeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

### CoreInstanceSourceDetailsInstanceSourceImageFilterDetails <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails;

CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.builder()
    .compartmentId(java.lang.String)
//  .definedTagsFilter(java.util.Map<java.lang.String, java.lang.String>)
//  .operatingSystem(java.lang.String)
//  .operatingSystemVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter">definedTagsFilter</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `definedTagsFilter`<sup>Optional</sup> <a name="definedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsFilter();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion"></a>

```java
public java.lang.String getOperatingSystemVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

### CoreInstanceTimeouts <a name="CoreInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceTimeouts;

CoreInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceAgentConfigOutputReference <a name="CoreInstanceAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAgentConfigOutputReference;

new CoreInstanceAgentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig">putPluginsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled">resetAreAllPluginsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled">resetIsManagementDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled">resetIsMonitoringDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig">resetPluginsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPluginsConfig` <a name="putPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig"></a>

```java
public void putPluginsConfig(IResolvable OR java.util.List<CoreInstanceAgentConfigPluginsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>>

---

##### `resetAreAllPluginsDisabled` <a name="resetAreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled"></a>

```java
public void resetAreAllPluginsDisabled()
```

##### `resetIsManagementDisabled` <a name="resetIsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled"></a>

```java
public void resetIsManagementDisabled()
```

##### `resetIsMonitoringDisabled` <a name="resetIsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled"></a>

```java
public void resetIsMonitoringDisabled()
```

##### `resetPluginsConfig` <a name="resetPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig"></a>

```java
public void resetPluginsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig">pluginsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput">areAllPluginsDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput">isManagementDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput">isMonitoringDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput">pluginsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled">areAllPluginsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled">isManagementDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled">isMonitoringDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pluginsConfig`<sup>Required</sup> <a name="pluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig"></a>

```java
public CoreInstanceAgentConfigPluginsConfigList getPluginsConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a>

---

##### `areAllPluginsDisabledInput`<sup>Optional</sup> <a name="areAllPluginsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput"></a>

```java
public java.lang.Object getAreAllPluginsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagementDisabledInput`<sup>Optional</sup> <a name="isManagementDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput"></a>

```java
public java.lang.Object getIsManagementDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonitoringDisabledInput`<sup>Optional</sup> <a name="isMonitoringDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput"></a>

```java
public java.lang.Object getIsMonitoringDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pluginsConfigInput`<sup>Optional</sup> <a name="pluginsConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput"></a>

```java
public java.lang.Object getPluginsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>>

---

##### `areAllPluginsDisabled`<sup>Required</sup> <a name="areAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```java
public java.lang.Object getAreAllPluginsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagementDisabled`<sup>Required</sup> <a name="isManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled"></a>

```java
public java.lang.Object getIsManagementDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMonitoringDisabled`<sup>Required</sup> <a name="isMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```java
public java.lang.Object getIsMonitoringDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue"></a>

```java
public CoreInstanceAgentConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---


### CoreInstanceAgentConfigPluginsConfigList <a name="CoreInstanceAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAgentConfigPluginsConfigList;

new CoreInstanceAgentConfigPluginsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get"></a>

```java
public CoreInstanceAgentConfigPluginsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>>

---


### CoreInstanceAgentConfigPluginsConfigOutputReference <a name="CoreInstanceAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAgentConfigPluginsConfigOutputReference;

new CoreInstanceAgentConfigPluginsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig">CoreInstanceAgentConfigPluginsConfig</a>

---


### CoreInstanceAvailabilityConfigOutputReference <a name="CoreInstanceAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceAvailabilityConfigOutputReference;

new CoreInstanceAvailabilityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred">resetIsLiveMigrationPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction">resetRecoveryAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLiveMigrationPreferred` <a name="resetIsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred"></a>

```java
public void resetIsLiveMigrationPreferred()
```

##### `resetRecoveryAction` <a name="resetRecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction"></a>

```java
public void resetRecoveryAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput">isLiveMigrationPreferredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput">recoveryActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">isLiveMigrationPreferred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction">recoveryAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isLiveMigrationPreferredInput`<sup>Optional</sup> <a name="isLiveMigrationPreferredInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput"></a>

```java
public java.lang.Object getIsLiveMigrationPreferredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recoveryActionInput`<sup>Optional</sup> <a name="recoveryActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput"></a>

```java
public java.lang.String getRecoveryActionInput();
```

- *Type:* java.lang.String

---

##### `isLiveMigrationPreferred`<sup>Required</sup> <a name="isLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```java
public java.lang.Object getIsLiveMigrationPreferred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recoveryAction`<sup>Required</sup> <a name="recoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction"></a>

```java
public java.lang.String getRecoveryAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue"></a>

```java
public CoreInstanceAvailabilityConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList;

new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">resetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetIpv6SubnetCidr` <a name="resetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```java
public void resetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6SubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidrInput`<sup>Optional</sup> <a name="ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```java
public java.lang.String getIpv6SubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### CoreInstanceCreateVnicDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceCreateVnicDetailsOutputReference;

new CoreInstanceCreateVnicDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">putIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip">resetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">resetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">resetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">resetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv6AddressIpv6SubnetCidrPairDetails` <a name="putIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void putIpv6AddressIpv6SubnetCidrPairDetails(IResolvable OR java.util.List<CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `resetAssignIpv6Ip` <a name="resetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```java
public void resetAssignIpv6Ip()
```

##### `resetAssignPrivateDnsRecord` <a name="resetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```java
public void resetAssignPrivateDnsRecord()
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```java
public void resetHostnameLabel()
```

##### `resetIpv6AddressIpv6SubnetCidrPairDetails` <a name="resetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public void resetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```java
public void resetSecurityAttributes()
```

##### `resetSkipSourceDestCheck` <a name="resetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```java
public void resetSkipSourceDestCheck()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetVlanId` <a name="resetVlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId"></a>

```java
public void resetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput">assignIpv6IpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">assignPrivateDnsRecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput">securityAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">skipSourceDestCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip">assignIpv6Ip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assignPrivateDnsRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `assignIpv6IpInput`<sup>Optional</sup> <a name="assignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```java
public java.lang.Object getAssignIpv6IpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPrivateDnsRecordInput`<sup>Optional</sup> <a name="assignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```java
public java.lang.Object getAssignPrivateDnsRecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.String getAssignPublicIpInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```java
public java.lang.String getHostnameLabelInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```java
public java.lang.Object getIpv6AddressIpv6SubnetCidrPairDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `skipSourceDestCheckInput`<sup>Optional</sup> <a name="skipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```java
public java.lang.Object getSkipSourceDestCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```java
public java.lang.String getVlanIdInput();
```

- *Type:* java.lang.String

---

##### `assignIpv6Ip`<sup>Required</sup> <a name="assignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```java
public java.lang.Object getAssignIpv6Ip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPrivateDnsRecord`<sup>Required</sup> <a name="assignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```java
public java.lang.Object getAssignPrivateDnsRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecurityAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```java
public java.lang.Object getSkipSourceDestCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId"></a>

```java
public java.lang.String getVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue"></a>

```java
public CoreInstanceCreateVnicDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---


### CoreInstanceInstanceOptionsOutputReference <a name="CoreInstanceInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceInstanceOptionsOutputReference;

new CoreInstanceInstanceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled">resetAreLegacyImdsEndpointsDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreLegacyImdsEndpointsDisabled` <a name="resetAreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled"></a>

```java
public void resetAreLegacyImdsEndpointsDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput">areLegacyImdsEndpointsDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">areLegacyImdsEndpointsDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areLegacyImdsEndpointsDisabledInput`<sup>Optional</sup> <a name="areLegacyImdsEndpointsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput"></a>

```java
public java.lang.Object getAreLegacyImdsEndpointsDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `areLegacyImdsEndpointsDisabled`<sup>Required</sup> <a name="areLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```java
public java.lang.Object getAreLegacyImdsEndpointsDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue"></a>

```java
public CoreInstanceInstanceOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---


### CoreInstanceLaunchOptionsOutputReference <a name="CoreInstanceLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchOptionsOutputReference;

new CoreInstanceLaunchOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType">resetBootVolumeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled">resetIsConsistentVolumeNamingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType">resetRemoteDataVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootVolumeType` <a name="resetBootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType"></a>

```java
public void resetBootVolumeType()
```

##### `resetFirmware` <a name="resetFirmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware"></a>

```java
public void resetFirmware()
```

##### `resetIsConsistentVolumeNamingEnabled` <a name="resetIsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled"></a>

```java
public void resetIsConsistentVolumeNamingEnabled()
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```java
public void resetIsPvEncryptionInTransitEnabled()
```

##### `resetNetworkType` <a name="resetNetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetRemoteDataVolumeType` <a name="resetRemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType"></a>

```java
public void resetRemoteDataVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput">bootVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput">firmwareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput">isConsistentVolumeNamingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput">remoteDataVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType">bootVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware">firmware</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">isConsistentVolumeNamingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType">remoteDataVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootVolumeTypeInput`<sup>Optional</sup> <a name="bootVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput"></a>

```java
public java.lang.String getBootVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput"></a>

```java
public java.lang.String getFirmwareInput();
```

- *Type:* java.lang.String

---

##### `isConsistentVolumeNamingEnabledInput`<sup>Optional</sup> <a name="isConsistentVolumeNamingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput"></a>

```java
public java.lang.Object getIsConsistentVolumeNamingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `remoteDataVolumeTypeInput`<sup>Optional</sup> <a name="remoteDataVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput"></a>

```java
public java.lang.String getRemoteDataVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `bootVolumeType`<sup>Required</sup> <a name="bootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType"></a>

```java
public java.lang.String getBootVolumeType();
```

- *Type:* java.lang.String

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

---

##### `isConsistentVolumeNamingEnabled`<sup>Required</sup> <a name="isConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```java
public java.lang.Object getIsConsistentVolumeNamingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `remoteDataVolumeType`<sup>Required</sup> <a name="remoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```java
public java.lang.String getRemoteDataVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue"></a>

```java
public CoreInstanceLaunchOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---


### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference;

new CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb">resetVpusPerGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetVpusPerGb` <a name="resetVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb"></a>

```java
public void resetVpusPerGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput">sizeInGbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput">volumeCreationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput">vpusPerGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">volumeCreationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">vpusPerGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInGbsInput`<sup>Optional</sup> <a name="sizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput"></a>

```java
public java.lang.String getSizeInGbsInput();
```

- *Type:* java.lang.String

---

##### `volumeCreationTypeInput`<sup>Optional</sup> <a name="volumeCreationTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput"></a>

```java
public java.lang.String getVolumeCreationTypeInput();
```

- *Type:* java.lang.String

---

##### `vpusPerGbInput`<sup>Optional</sup> <a name="vpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput"></a>

```java
public java.lang.String getVpusPerGbInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

---

##### `volumeCreationType`<sup>Required</sup> <a name="volumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```java
public java.lang.String getVolumeCreationType();
```

- *Type:* java.lang.String

---

##### `vpusPerGb`<sup>Required</sup> <a name="vpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```java
public java.lang.String getVpusPerGb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### CoreInstanceLaunchVolumeAttachmentsList <a name="CoreInstanceLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchVolumeAttachmentsList;

new CoreInstanceLaunchVolumeAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>>

---


### CoreInstanceLaunchVolumeAttachmentsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceLaunchVolumeAttachmentsOutputReference;

new CoreInstanceLaunchVolumeAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails">putLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType">resetEncryptionInTransitType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled">resetIsAgentAutoIscsiLoginEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable">resetIsShareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails">resetLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap">resetUseChap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchCreateVolumeDetails` <a name="putLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails"></a>

```java
public void putLaunchCreateVolumeDetails(CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `resetDevice` <a name="resetDevice" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice"></a>

```java
public void resetDevice()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEncryptionInTransitType` <a name="resetEncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType"></a>

```java
public void resetEncryptionInTransitType()
```

##### `resetIsAgentAutoIscsiLoginEnabled` <a name="resetIsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled"></a>

```java
public void resetIsAgentAutoIscsiLoginEnabled()
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```java
public void resetIsPvEncryptionInTransitEnabled()
```

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly"></a>

```java
public void resetIsReadOnly()
```

##### `resetIsShareable` <a name="resetIsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable"></a>

```java
public void resetIsShareable()
```

##### `resetLaunchCreateVolumeDetails` <a name="resetLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails"></a>

```java
public void resetLaunchCreateVolumeDetails()
```

##### `resetUseChap` <a name="resetUseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap"></a>

```java
public void resetUseChap()
```

##### `resetVolumeId` <a name="resetVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId"></a>

```java
public void resetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">launchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput">deviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput">encryptionInTransitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput">isAgentAutoIscsiLoginEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput">isShareableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput">launchCreateVolumeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput">useChapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device">device</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">encryptionInTransitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">isAgentAutoIscsiLoginEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable">isShareable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap">useChap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchCreateVolumeDetails`<sup>Required</sup> <a name="launchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference getLaunchCreateVolumeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a>

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput"></a>

```java
public java.lang.String getDeviceInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitTypeInput`<sup>Optional</sup> <a name="encryptionInTransitTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput"></a>

```java
public java.lang.String getEncryptionInTransitTypeInput();
```

- *Type:* java.lang.String

---

##### `isAgentAutoIscsiLoginEnabledInput`<sup>Optional</sup> <a name="isAgentAutoIscsiLoginEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput"></a>

```java
public java.lang.Object getIsAgentAutoIscsiLoginEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput"></a>

```java
public java.lang.Object getIsReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShareableInput`<sup>Optional</sup> <a name="isShareableInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput"></a>

```java
public java.lang.Object getIsShareableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `launchCreateVolumeDetailsInput`<sup>Optional</sup> <a name="launchCreateVolumeDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput"></a>

```java
public CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails getLaunchCreateVolumeDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `useChapInput`<sup>Optional</sup> <a name="useChapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput"></a>

```java
public java.lang.Object getUseChapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitType`<sup>Required</sup> <a name="encryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```java
public java.lang.String getEncryptionInTransitType();
```

- *Type:* java.lang.String

---

##### `isAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="isAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```java
public java.lang.Object getIsAgentAutoIscsiLoginEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```java
public java.lang.Object getIsPvEncryptionInTransitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```java
public java.lang.Object getIsReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShareable`<sup>Required</sup> <a name="isShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```java
public java.lang.Object getIsShareable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `useChap`<sup>Required</sup> <a name="useChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```java
public java.lang.Object getUseChap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments">CoreInstanceLaunchVolumeAttachments</a>

---


### CoreInstancePlatformConfigOutputReference <a name="CoreInstancePlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePlatformConfigOutputReference;

new CoreInstancePlatformConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled">resetAreVirtualInstructionsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap">resetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled">resetIsAccessControlServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled">resetIsInputOutputMemoryManagementUnitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled">resetIsMeasuredBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled">resetIsMemoryEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled">resetIsSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled">resetIsSymmetricMultiThreadingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled">resetIsTrustedPlatformModuleEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket">resetNumaNodesPerSocket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled">resetPercentageOfCoresEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreVirtualInstructionsEnabled` <a name="resetAreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled"></a>

```java
public void resetAreVirtualInstructionsEnabled()
```

##### `resetConfigMap` <a name="resetConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap"></a>

```java
public void resetConfigMap()
```

##### `resetIsAccessControlServiceEnabled` <a name="resetIsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled"></a>

```java
public void resetIsAccessControlServiceEnabled()
```

##### `resetIsInputOutputMemoryManagementUnitEnabled` <a name="resetIsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled"></a>

```java
public void resetIsInputOutputMemoryManagementUnitEnabled()
```

##### `resetIsMeasuredBootEnabled` <a name="resetIsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled"></a>

```java
public void resetIsMeasuredBootEnabled()
```

##### `resetIsMemoryEncryptionEnabled` <a name="resetIsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled"></a>

```java
public void resetIsMemoryEncryptionEnabled()
```

##### `resetIsSecureBootEnabled` <a name="resetIsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled"></a>

```java
public void resetIsSecureBootEnabled()
```

##### `resetIsSymmetricMultiThreadingEnabled` <a name="resetIsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled"></a>

```java
public void resetIsSymmetricMultiThreadingEnabled()
```

##### `resetIsTrustedPlatformModuleEnabled` <a name="resetIsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled"></a>

```java
public void resetIsTrustedPlatformModuleEnabled()
```

##### `resetNumaNodesPerSocket` <a name="resetNumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket"></a>

```java
public void resetNumaNodesPerSocket()
```

##### `resetPercentageOfCoresEnabled` <a name="resetPercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled"></a>

```java
public void resetPercentageOfCoresEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput">areVirtualInstructionsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput">configMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput">isAccessControlServiceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput">isInputOutputMemoryManagementUnitEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput">isMeasuredBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput">isMemoryEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput">isSecureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput">isSymmetricMultiThreadingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput">isTrustedPlatformModuleEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput">numaNodesPerSocketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput">percentageOfCoresEnabledInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled">areVirtualInstructionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap">configMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled">isAccessControlServiceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">isInputOutputMemoryManagementUnitEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled">isMeasuredBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled">isMemoryEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled">isSecureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">isSymmetricMultiThreadingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">isTrustedPlatformModuleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket">numaNodesPerSocket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled">percentageOfCoresEnabled</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areVirtualInstructionsEnabledInput`<sup>Optional</sup> <a name="areVirtualInstructionsEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput"></a>

```java
public java.lang.Object getAreVirtualInstructionsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configMapInput`<sup>Optional</sup> <a name="configMapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isAccessControlServiceEnabledInput`<sup>Optional</sup> <a name="isAccessControlServiceEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput"></a>

```java
public java.lang.Object getIsAccessControlServiceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isInputOutputMemoryManagementUnitEnabledInput`<sup>Optional</sup> <a name="isInputOutputMemoryManagementUnitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput"></a>

```java
public java.lang.Object getIsInputOutputMemoryManagementUnitEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMeasuredBootEnabledInput`<sup>Optional</sup> <a name="isMeasuredBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput"></a>

```java
public java.lang.Object getIsMeasuredBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMemoryEncryptionEnabledInput`<sup>Optional</sup> <a name="isMemoryEncryptionEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput"></a>

```java
public java.lang.Object getIsMemoryEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecureBootEnabledInput`<sup>Optional</sup> <a name="isSecureBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput"></a>

```java
public java.lang.Object getIsSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSymmetricMultiThreadingEnabledInput`<sup>Optional</sup> <a name="isSymmetricMultiThreadingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput"></a>

```java
public java.lang.Object getIsSymmetricMultiThreadingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTrustedPlatformModuleEnabledInput`<sup>Optional</sup> <a name="isTrustedPlatformModuleEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput"></a>

```java
public java.lang.Object getIsTrustedPlatformModuleEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numaNodesPerSocketInput`<sup>Optional</sup> <a name="numaNodesPerSocketInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput"></a>

```java
public java.lang.String getNumaNodesPerSocketInput();
```

- *Type:* java.lang.String

---

##### `percentageOfCoresEnabledInput`<sup>Optional</sup> <a name="percentageOfCoresEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput"></a>

```java
public java.lang.Number getPercentageOfCoresEnabledInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `areVirtualInstructionsEnabled`<sup>Required</sup> <a name="areVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```java
public java.lang.Object getAreVirtualInstructionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isAccessControlServiceEnabled`<sup>Required</sup> <a name="isAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```java
public java.lang.Object getIsAccessControlServiceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isInputOutputMemoryManagementUnitEnabled`<sup>Required</sup> <a name="isInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```java
public java.lang.Object getIsInputOutputMemoryManagementUnitEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMeasuredBootEnabled`<sup>Required</sup> <a name="isMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```java
public java.lang.Object getIsMeasuredBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMemoryEncryptionEnabled`<sup>Required</sup> <a name="isMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```java
public java.lang.Object getIsMemoryEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecureBootEnabled`<sup>Required</sup> <a name="isSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```java
public java.lang.Object getIsSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSymmetricMultiThreadingEnabled`<sup>Required</sup> <a name="isSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```java
public java.lang.Object getIsSymmetricMultiThreadingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTrustedPlatformModuleEnabled`<sup>Required</sup> <a name="isTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```java
public java.lang.Object getIsTrustedPlatformModuleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numaNodesPerSocket`<sup>Required</sup> <a name="numaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```java
public java.lang.String getNumaNodesPerSocket();
```

- *Type:* java.lang.String

---

##### `percentageOfCoresEnabled`<sup>Required</sup> <a name="percentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```java
public java.lang.Number getPercentageOfCoresEnabled();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue"></a>

```java
public CoreInstancePlatformConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---


### CoreInstancePreemptibleInstanceConfigOutputReference <a name="CoreInstancePreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePreemptibleInstanceConfigOutputReference;

new CoreInstancePreemptibleInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction">putPreemptionAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreemptionAction` <a name="putPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction"></a>

```java
public void putPreemptionAction(CoreInstancePreemptibleInstanceConfigPreemptionAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput">preemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```java
public CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference getPreemptionAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a>

---

##### `preemptionActionInput`<sup>Optional</sup> <a name="preemptionActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput"></a>

```java
public CoreInstancePreemptibleInstanceConfigPreemptionAction getPreemptionActionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```java
public CoreInstancePreemptibleInstanceConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---


### CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference <a name="CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference;

new CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume">resetPreserveBootVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveBootVolume` <a name="resetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume"></a>

```java
public void resetPreserveBootVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput">preserveBootVolumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">preserveBootVolume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preserveBootVolumeInput`<sup>Optional</sup> <a name="preserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput"></a>

```java
public java.lang.Object getPreserveBootVolumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `preserveBootVolume`<sup>Required</sup> <a name="preserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```java
public java.lang.Object getPreserveBootVolume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```java
public CoreInstancePreemptibleInstanceConfigPreemptionAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


### CoreInstanceShapeConfigOutputReference <a name="CoreInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceShapeConfigOutputReference;

new CoreInstanceShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization">resetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes">resetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus">resetVcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaselineOcpuUtilization` <a name="resetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```java
public void resetBaselineOcpuUtilization()
```

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetNvmes` <a name="resetNvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes"></a>

```java
public void resetNvmes()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```

##### `resetVcpus` <a name="resetVcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus"></a>

```java
public void resetVcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus">gpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks">localDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription">processorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput">baselineOcpuUtilizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput">nvmesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput">vcpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus">vcpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription"></a>

```java
public java.lang.String getGpuDescription();
```

- *Type:* java.lang.String

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus"></a>

```java
public java.lang.Number getGpus();
```

- *Type:* java.lang.Number

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription"></a>

```java
public java.lang.String getLocalDiskDescription();
```

- *Type:* java.lang.String

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks"></a>

```java
public java.lang.Number getLocalDisks();
```

- *Type:* java.lang.Number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```java
public java.lang.Number getLocalDisksTotalSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments"></a>

```java
public java.lang.Number getMaxVnicAttachments();
```

- *Type:* java.lang.Number

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```java
public java.lang.Number getNetworkingBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription"></a>

```java
public java.lang.String getProcessorDescription();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilizationInput`<sup>Optional</sup> <a name="baselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```java
public java.lang.String getBaselineOcpuUtilizationInput();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `nvmesInput`<sup>Optional</sup> <a name="nvmesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```java
public java.lang.Number getNvmesInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput"></a>

```java
public java.lang.Number getVcpusInput();
```

- *Type:* java.lang.Number

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```java
public java.lang.String getBaselineOcpuUtilization();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes"></a>

```java
public java.lang.Number getNvmes();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus"></a>

```java
public java.lang.Number getVcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue"></a>

```java
public CoreInstanceShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---


### CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference;

new CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter">resetDefinedTagsFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion">resetOperatingSystemVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTagsFilter` <a name="resetDefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter"></a>

```java
public void resetDefinedTagsFilter()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetOperatingSystemVersion` <a name="resetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion"></a>

```java
public void resetOperatingSystemVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput">definedTagsFilterInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput">operatingSystemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">definedTagsFilter</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsFilterInput`<sup>Optional</sup> <a name="definedTagsFilterInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsFilterInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemVersionInput`<sup>Optional</sup> <a name="operatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput"></a>

```java
public java.lang.String getOperatingSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTagsFilter`<sup>Required</sup> <a name="definedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsFilter();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```java
public java.lang.String getOperatingSystemVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```java
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---


### CoreInstanceSourceDetailsOutputReference <a name="CoreInstanceSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceSourceDetailsOutputReference;

new CoreInstanceSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails">putInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs">resetBootVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb">resetBootVolumeVpusPerGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails">resetInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled">resetIsPreserveBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId">resetSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceSourceImageFilterDetails` <a name="putInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails"></a>

```java
public void putInstanceSourceImageFilterDetails(CoreInstanceSourceDetailsInstanceSourceImageFilterDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `resetBootVolumeSizeInGbs` <a name="resetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```java
public void resetBootVolumeSizeInGbs()
```

##### `resetBootVolumeVpusPerGb` <a name="resetBootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb"></a>

```java
public void resetBootVolumeVpusPerGb()
```

##### `resetInstanceSourceImageFilterDetails` <a name="resetInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails"></a>

```java
public void resetInstanceSourceImageFilterDetails()
```

##### `resetIsPreserveBootVolumeEnabled` <a name="resetIsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled"></a>

```java
public void resetIsPreserveBootVolumeEnabled()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId"></a>

```java
public void resetSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">instanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">bootVolumeSizeInGbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput">bootVolumeVpusPerGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput">instanceSourceImageFilterDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput">isPreserveBootVolumeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb">bootVolumeVpusPerGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">isPreserveBootVolumeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceSourceImageFilterDetails`<sup>Required</sup> <a name="instanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```java
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference getInstanceSourceImageFilterDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a>

---

##### `bootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="bootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```java
public java.lang.String getBootVolumeSizeInGbsInput();
```

- *Type:* java.lang.String

---

##### `bootVolumeVpusPerGbInput`<sup>Optional</sup> <a name="bootVolumeVpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput"></a>

```java
public java.lang.String getBootVolumeVpusPerGbInput();
```

- *Type:* java.lang.String

---

##### `instanceSourceImageFilterDetailsInput`<sup>Optional</sup> <a name="instanceSourceImageFilterDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput"></a>

```java
public CoreInstanceSourceDetailsInstanceSourceImageFilterDetails getInstanceSourceImageFilterDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `isPreserveBootVolumeEnabledInput`<sup>Optional</sup> <a name="isPreserveBootVolumeEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput"></a>

```java
public java.lang.Object getIsPreserveBootVolumeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `bootVolumeSizeInGbs`<sup>Required</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```java
public java.lang.String getBootVolumeSizeInGbs();
```

- *Type:* java.lang.String

---

##### `bootVolumeVpusPerGb`<sup>Required</sup> <a name="bootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```java
public java.lang.String getBootVolumeVpusPerGb();
```

- *Type:* java.lang.String

---

##### `isPreserveBootVolumeEnabled`<sup>Required</sup> <a name="isPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```java
public java.lang.Object getIsPreserveBootVolumeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue"></a>

```java
public CoreInstanceSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---


### CoreInstanceTimeoutsOutputReference <a name="CoreInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_instance.CoreInstanceTimeoutsOutputReference;

new CoreInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---



