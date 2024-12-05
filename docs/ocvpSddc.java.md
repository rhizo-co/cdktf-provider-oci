# `ocvpSddc` Submodule <a name="`ocvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.ocvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpSddc <a name="OcvpSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddc;

OcvpSddc.Builder.create(Construct scope, java.lang.String id)
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
    .sshAuthorizedKeys(java.lang.String)
    .vmwareSoftwareVersion(java.lang.String)
//  .capacityReservationId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .datastores(IResolvable)
//  .datastores(java.util.List<OcvpSddcDatastores>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .esxiHostsCount(java.lang.Number)
//  .esxiSoftwareVersion(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hcxAction(java.lang.String)
//  .hcxVlanId(java.lang.String)
//  .id(java.lang.String)
//  .initialConfiguration(IResolvable)
//  .initialConfiguration(java.util.List<OcvpSddcInitialConfiguration>)
//  .initialHostOcpuCount(java.lang.Number)
//  .initialHostShapeName(java.lang.String)
//  .initialSku(java.lang.String)
//  .instanceDisplayNamePrefix(java.lang.String)
//  .isHcxEnabled(java.lang.Boolean)
//  .isHcxEnabled(IResolvable)
//  .isShieldedInstanceEnabled(java.lang.Boolean)
//  .isShieldedInstanceEnabled(IResolvable)
//  .isSingleHostSddc(java.lang.Boolean)
//  .isSingleHostSddc(IResolvable)
//  .nsxEdgeUplink1VlanId(java.lang.String)
//  .nsxEdgeUplink2VlanId(java.lang.String)
//  .nsxEdgeVtepVlanId(java.lang.String)
//  .nsxVtepVlanId(java.lang.String)
//  .provisioningSubnetId(java.lang.String)
//  .provisioningVlanId(java.lang.String)
//  .refreshHcxLicenseStatus(java.lang.Boolean)
//  .refreshHcxLicenseStatus(IResolvable)
//  .replicationVlanId(java.lang.String)
//  .reservingHcxOnPremiseLicenseKeys(java.util.List<java.lang.String>)
//  .timeouts(OcvpSddcTimeouts)
//  .vmotionVlanId(java.lang.String)
//  .vsanVlanId(java.lang.String)
//  .vsphereVlanId(java.lang.String)
//  .workloadNetworkCidr(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.datastores">datastores</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>></code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxAction">hcxAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialConfiguration">initialConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>></code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialSku">initialSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isHcxEnabled">isHcxEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isSingleHostSddc">isSingleHostSddc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.sshAuthorizedKeys"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmwareSoftwareVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.capacityReservationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.computeAvailabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.datastores"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>>

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `esxiHostsCount`<sup>Optional</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiHostsCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiSoftwareVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `hcxAction`<sup>Optional</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfiguration`<sup>Optional</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>>

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostShapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `initialSku`<sup>Optional</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.instanceDisplayNamePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `isHcxEnabled`<sup>Optional</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isHcxEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isShieldedInstanceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `isSingleHostSddc`<sup>Optional</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isSingleHostSddc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink1VlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink2VlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `nsxEdgeVtepVlanId`<sup>Optional</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeVtepVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Optional</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxVtepVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Optional</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `refreshHcxLicenseStatus`<sup>Optional</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.refreshHcxLicenseStatus"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.replicationVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Optional</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.reservingHcxOnPremiseLicenseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `vmotionVlanId`<sup>Optional</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmotionVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Optional</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsanVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsphereVlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.workloadNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores">putDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration">putInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores">resetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount">resetEsxiHostsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion">resetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction">resetHcxAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId">resetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration">resetInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount">resetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName">resetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku">resetInitialSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix">resetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled">resetIsHcxEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled">resetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc">resetIsSingleHostSddc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId">resetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId">resetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId">resetNsxEdgeVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId">resetNsxVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId">resetProvisioningSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId">resetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus">resetRefreshHcxLicenseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId">resetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys">resetReservingHcxOnPremiseLicenseKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId">resetVmotionVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId">resetVsanVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId">resetVsphereVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr">resetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastores` <a name="putDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores"></a>

```java
public void putDatastores(IResolvable OR java.util.List<OcvpSddcDatastores> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>>

---

##### `putInitialConfiguration` <a name="putInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration"></a>

```java
public void putInitialConfiguration(IResolvable OR java.util.List<OcvpSddcInitialConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts"></a>

```java
public void putTimeouts(OcvpSddcTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain"></a>

```java
public void resetComputeAvailabilityDomain()
```

##### `resetDatastores` <a name="resetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores"></a>

```java
public void resetDatastores()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEsxiHostsCount` <a name="resetEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount"></a>

```java
public void resetEsxiHostsCount()
```

##### `resetEsxiSoftwareVersion` <a name="resetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion"></a>

```java
public void resetEsxiSoftwareVersion()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHcxAction` <a name="resetHcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction"></a>

```java
public void resetHcxAction()
```

##### `resetHcxVlanId` <a name="resetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId"></a>

```java
public void resetHcxVlanId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId"></a>

```java
public void resetId()
```

##### `resetInitialConfiguration` <a name="resetInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration"></a>

```java
public void resetInitialConfiguration()
```

##### `resetInitialHostOcpuCount` <a name="resetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount"></a>

```java
public void resetInitialHostOcpuCount()
```

##### `resetInitialHostShapeName` <a name="resetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName"></a>

```java
public void resetInitialHostShapeName()
```

##### `resetInitialSku` <a name="resetInitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku"></a>

```java
public void resetInitialSku()
```

##### `resetInstanceDisplayNamePrefix` <a name="resetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix"></a>

```java
public void resetInstanceDisplayNamePrefix()
```

##### `resetIsHcxEnabled` <a name="resetIsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled"></a>

```java
public void resetIsHcxEnabled()
```

##### `resetIsShieldedInstanceEnabled` <a name="resetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled"></a>

```java
public void resetIsShieldedInstanceEnabled()
```

##### `resetIsSingleHostSddc` <a name="resetIsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc"></a>

```java
public void resetIsSingleHostSddc()
```

##### `resetNsxEdgeUplink1VlanId` <a name="resetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId"></a>

```java
public void resetNsxEdgeUplink1VlanId()
```

##### `resetNsxEdgeUplink2VlanId` <a name="resetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId"></a>

```java
public void resetNsxEdgeUplink2VlanId()
```

##### `resetNsxEdgeVtepVlanId` <a name="resetNsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId"></a>

```java
public void resetNsxEdgeVtepVlanId()
```

##### `resetNsxVtepVlanId` <a name="resetNsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId"></a>

```java
public void resetNsxVtepVlanId()
```

##### `resetProvisioningSubnetId` <a name="resetProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId"></a>

```java
public void resetProvisioningSubnetId()
```

##### `resetProvisioningVlanId` <a name="resetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId"></a>

```java
public void resetProvisioningVlanId()
```

##### `resetRefreshHcxLicenseStatus` <a name="resetRefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus"></a>

```java
public void resetRefreshHcxLicenseStatus()
```

##### `resetReplicationVlanId` <a name="resetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId"></a>

```java
public void resetReplicationVlanId()
```

##### `resetReservingHcxOnPremiseLicenseKeys` <a name="resetReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys"></a>

```java
public void resetReservingHcxOnPremiseLicenseKeys()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVmotionVlanId` <a name="resetVmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId"></a>

```java
public void resetVmotionVlanId()
```

##### `resetVsanVlanId` <a name="resetVsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId"></a>

```java
public void resetVsanVlanId()
```

##### `resetVsphereVlanId` <a name="resetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId"></a>

```java
public void resetVsphereVlanId()
```

##### `resetWorkloadNetworkCidr` <a name="resetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr"></a>

```java
public void resetWorkloadNetworkCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddc;

OcvpSddc.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddc;

OcvpSddc.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddc;

OcvpSddc.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddc;

OcvpSddc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OcvpSddc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OcvpSddc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount">clustersCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn">hcxFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword">hcxInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode">hcxMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey">hcxOnPremKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses">hcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId">hcxPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration">initialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled">isHcxEnterpriseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade">isHcxPendingDowngrade</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId">nsxEdgeUplinkIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn">nsxManagerFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword">nsxManagerInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId">nsxManagerPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername">nsxManagerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName">nsxOverlaySegmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd">timeHcxBillingCycleEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated">timeHcxLicenseStatusUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn">vcenterFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword">vcenterInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId">vcenterPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername">vcenterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide">vsphereUpgradeGuide</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput">datastoresInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput">esxiHostsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput">esxiSoftwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput">hcxActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput">hcxVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput">initialConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput">initialHostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput">initialHostShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput">initialSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput">instanceDisplayNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput">isHcxEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput">isShieldedInstanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput">isSingleHostSddcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput">nsxEdgeUplink1VlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput">nsxEdgeUplink2VlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput">nsxEdgeVtepVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput">nsxVtepVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput">provisioningSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput">provisioningVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput">refreshHcxLicenseStatusInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput">replicationVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput">reservingHcxOnPremiseLicenseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput">sshAuthorizedKeysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput">vmotionVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput">vmwareSoftwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput">vsanVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput">vsphereVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput">workloadNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction">hcxAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku">initialSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled">isHcxEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount"></a>

```java
public java.lang.Number getActualEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `clustersCount`<sup>Required</sup> <a name="clustersCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount"></a>

```java
public java.lang.Number getClustersCount();
```

- *Type:* java.lang.Number

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores"></a>

```java
public OcvpSddcDatastoresList getDatastores();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a>

---

##### `hcxFqdn`<sup>Required</sup> <a name="hcxFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn"></a>

```java
public java.lang.String getHcxFqdn();
```

- *Type:* java.lang.String

---

##### `hcxInitialPassword`<sup>Required</sup> <a name="hcxInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword"></a>

```java
public java.lang.String getHcxInitialPassword();
```

- *Type:* java.lang.String

---

##### `hcxMode`<sup>Required</sup> <a name="hcxMode" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode"></a>

```java
public java.lang.String getHcxMode();
```

- *Type:* java.lang.String

---

##### `hcxOnPremKey`<sup>Required</sup> <a name="hcxOnPremKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey"></a>

```java
public java.lang.String getHcxOnPremKey();
```

- *Type:* java.lang.String

---

##### `hcxOnPremLicenses`<sup>Required</sup> <a name="hcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses"></a>

```java
public OcvpSddcHcxOnPremLicensesList getHcxOnPremLicenses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a>

---

##### `hcxPrivateIpId`<sup>Required</sup> <a name="hcxPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId"></a>

```java
public java.lang.String getHcxPrivateIpId();
```

- *Type:* java.lang.String

---

##### `initialConfiguration`<sup>Required</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration"></a>

```java
public OcvpSddcInitialConfigurationList getInitialConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a>

---

##### `isHcxEnterpriseEnabled`<sup>Required</sup> <a name="isHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled"></a>

```java
public IResolvable getIsHcxEnterpriseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHcxPendingDowngrade`<sup>Required</sup> <a name="isHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade"></a>

```java
public IResolvable getIsHcxPendingDowngrade();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nsxEdgeUplinkIpId`<sup>Required</sup> <a name="nsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId"></a>

```java
public java.lang.String getNsxEdgeUplinkIpId();
```

- *Type:* java.lang.String

---

##### `nsxManagerFqdn`<sup>Required</sup> <a name="nsxManagerFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn"></a>

```java
public java.lang.String getNsxManagerFqdn();
```

- *Type:* java.lang.String

---

##### `nsxManagerInitialPassword`<sup>Required</sup> <a name="nsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword"></a>

```java
public java.lang.String getNsxManagerInitialPassword();
```

- *Type:* java.lang.String

---

##### `nsxManagerPrivateIpId`<sup>Required</sup> <a name="nsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId"></a>

```java
public java.lang.String getNsxManagerPrivateIpId();
```

- *Type:* java.lang.String

---

##### `nsxManagerUsername`<sup>Required</sup> <a name="nsxManagerUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername"></a>

```java
public java.lang.String getNsxManagerUsername();
```

- *Type:* java.lang.String

---

##### `nsxOverlaySegmentName`<sup>Required</sup> <a name="nsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName"></a>

```java
public java.lang.String getNsxOverlaySegmentName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeHcxBillingCycleEnd`<sup>Required</sup> <a name="timeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd"></a>

```java
public java.lang.String getTimeHcxBillingCycleEnd();
```

- *Type:* java.lang.String

---

##### `timeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="timeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```java
public java.lang.String getTimeHcxLicenseStatusUpdated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts"></a>

```java
public OcvpSddcTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses"></a>

```java
public OcvpSddcUpgradeLicensesList getUpgradeLicenses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a>

---

##### `vcenterFqdn`<sup>Required</sup> <a name="vcenterFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn"></a>

```java
public java.lang.String getVcenterFqdn();
```

- *Type:* java.lang.String

---

##### `vcenterInitialPassword`<sup>Required</sup> <a name="vcenterInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword"></a>

```java
public java.lang.String getVcenterInitialPassword();
```

- *Type:* java.lang.String

---

##### `vcenterPrivateIpId`<sup>Required</sup> <a name="vcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId"></a>

```java
public java.lang.String getVcenterPrivateIpId();
```

- *Type:* java.lang.String

---

##### `vcenterUsername`<sup>Required</sup> <a name="vcenterUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername"></a>

```java
public java.lang.String getVcenterUsername();
```

- *Type:* java.lang.String

---

##### `vsphereUpgradeGuide`<sup>Required</sup> <a name="vsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide"></a>

```java
public java.lang.String getVsphereUpgradeGuide();
```

- *Type:* java.lang.String

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects"></a>

```java
public OcvpSddcVsphereUpgradeObjectsList getVsphereUpgradeObjects();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a>

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput"></a>

```java
public java.lang.String getComputeAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `datastoresInput`<sup>Optional</sup> <a name="datastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput"></a>

```java
public java.lang.Object getDatastoresInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `esxiHostsCountInput`<sup>Optional</sup> <a name="esxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput"></a>

```java
public java.lang.Number getEsxiHostsCountInput();
```

- *Type:* java.lang.Number

---

##### `esxiSoftwareVersionInput`<sup>Optional</sup> <a name="esxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput"></a>

```java
public java.lang.String getEsxiSoftwareVersionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hcxActionInput`<sup>Optional</sup> <a name="hcxActionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput"></a>

```java
public java.lang.String getHcxActionInput();
```

- *Type:* java.lang.String

---

##### `hcxVlanIdInput`<sup>Optional</sup> <a name="hcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput"></a>

```java
public java.lang.String getHcxVlanIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialConfigurationInput`<sup>Optional</sup> <a name="initialConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput"></a>

```java
public java.lang.Object getInitialConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>>

---

##### `initialHostOcpuCountInput`<sup>Optional</sup> <a name="initialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput"></a>

```java
public java.lang.Number getInitialHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeNameInput`<sup>Optional</sup> <a name="initialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput"></a>

```java
public java.lang.String getInitialHostShapeNameInput();
```

- *Type:* java.lang.String

---

##### `initialSkuInput`<sup>Optional</sup> <a name="initialSkuInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput"></a>

```java
public java.lang.String getInitialSkuInput();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="instanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput"></a>

```java
public java.lang.String getInstanceDisplayNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `isHcxEnabledInput`<sup>Optional</sup> <a name="isHcxEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput"></a>

```java
public java.lang.Object getIsHcxEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="isShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSingleHostSddcInput`<sup>Optional</sup> <a name="isSingleHostSddcInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput"></a>

```java
public java.lang.Object getIsSingleHostSddcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="nsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput"></a>

```java
public java.lang.String getNsxEdgeVtepVlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanIdInput`<sup>Optional</sup> <a name="nsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput"></a>

```java
public java.lang.String getNsxVtepVlanIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetIdInput`<sup>Optional</sup> <a name="provisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput"></a>

```java
public java.lang.String getProvisioningSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningVlanIdInput`<sup>Optional</sup> <a name="provisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput"></a>

```java
public java.lang.String getProvisioningVlanIdInput();
```

- *Type:* java.lang.String

---

##### `refreshHcxLicenseStatusInput`<sup>Optional</sup> <a name="refreshHcxLicenseStatusInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput"></a>

```java
public java.lang.Object getRefreshHcxLicenseStatusInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationVlanIdInput`<sup>Optional</sup> <a name="replicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput"></a>

```java
public java.lang.String getReplicationVlanIdInput();
```

- *Type:* java.lang.String

---

##### `reservingHcxOnPremiseLicenseKeysInput`<sup>Optional</sup> <a name="reservingHcxOnPremiseLicenseKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput"></a>

```java
public java.util.List<java.lang.String> getReservingHcxOnPremiseLicenseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshAuthorizedKeysInput`<sup>Optional</sup> <a name="sshAuthorizedKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput"></a>

```java
public java.lang.String getSshAuthorizedKeysInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `vmotionVlanIdInput`<sup>Optional</sup> <a name="vmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput"></a>

```java
public java.lang.String getVmotionVlanIdInput();
```

- *Type:* java.lang.String

---

##### `vmwareSoftwareVersionInput`<sup>Optional</sup> <a name="vmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput"></a>

```java
public java.lang.String getVmwareSoftwareVersionInput();
```

- *Type:* java.lang.String

---

##### `vsanVlanIdInput`<sup>Optional</sup> <a name="vsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput"></a>

```java
public java.lang.String getVsanVlanIdInput();
```

- *Type:* java.lang.String

---

##### `vsphereVlanIdInput`<sup>Optional</sup> <a name="vsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput"></a>

```java
public java.lang.String getVsphereVlanIdInput();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidrInput`<sup>Optional</sup> <a name="workloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput"></a>

```java
public java.lang.String getWorkloadNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hcxAction`<sup>Required</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction"></a>

```java
public java.lang.String getHcxAction();
```

- *Type:* java.lang.String

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

---

##### `initialSku`<sup>Required</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku"></a>

```java
public java.lang.String getInitialSku();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

---

##### `isHcxEnabled`<sup>Required</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled"></a>

```java
public java.lang.Object getIsHcxEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSingleHostSddc`<sup>Required</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc"></a>

```java
public java.lang.Object getIsSingleHostSddc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

---

##### `refreshHcxLicenseStatus`<sup>Required</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus"></a>

```java
public java.lang.Object getRefreshHcxLicenseStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```java
public java.util.List<java.lang.String> getReservingHcxOnPremiseLicenseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys"></a>

```java
public java.lang.String getSshAuthorizedKeys();
```

- *Type:* java.lang.String

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion"></a>

```java
public java.lang.String getVmwareSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpSddcConfig <a name="OcvpSddcConfig" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcConfig;

OcvpSddcConfig.builder()
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
    .sshAuthorizedKeys(java.lang.String)
    .vmwareSoftwareVersion(java.lang.String)
//  .capacityReservationId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .datastores(IResolvable)
//  .datastores(java.util.List<OcvpSddcDatastores>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .esxiHostsCount(java.lang.Number)
//  .esxiSoftwareVersion(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hcxAction(java.lang.String)
//  .hcxVlanId(java.lang.String)
//  .id(java.lang.String)
//  .initialConfiguration(IResolvable)
//  .initialConfiguration(java.util.List<OcvpSddcInitialConfiguration>)
//  .initialHostOcpuCount(java.lang.Number)
//  .initialHostShapeName(java.lang.String)
//  .initialSku(java.lang.String)
//  .instanceDisplayNamePrefix(java.lang.String)
//  .isHcxEnabled(java.lang.Boolean)
//  .isHcxEnabled(IResolvable)
//  .isShieldedInstanceEnabled(java.lang.Boolean)
//  .isShieldedInstanceEnabled(IResolvable)
//  .isSingleHostSddc(java.lang.Boolean)
//  .isSingleHostSddc(IResolvable)
//  .nsxEdgeUplink1VlanId(java.lang.String)
//  .nsxEdgeUplink2VlanId(java.lang.String)
//  .nsxEdgeVtepVlanId(java.lang.String)
//  .nsxVtepVlanId(java.lang.String)
//  .provisioningSubnetId(java.lang.String)
//  .provisioningVlanId(java.lang.String)
//  .refreshHcxLicenseStatus(java.lang.Boolean)
//  .refreshHcxLicenseStatus(IResolvable)
//  .replicationVlanId(java.lang.String)
//  .reservingHcxOnPremiseLicenseKeys(java.util.List<java.lang.String>)
//  .timeouts(OcvpSddcTimeouts)
//  .vmotionVlanId(java.lang.String)
//  .vsanVlanId(java.lang.String)
//  .vsphereVlanId(java.lang.String)
//  .workloadNetworkCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores">datastores</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>></code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction">hcxAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration">initialConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>></code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku">initialSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled">isHcxEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys"></a>

```java
public java.lang.String getSshAuthorizedKeys();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion"></a>

```java
public java.lang.String getVmwareSoftwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores"></a>

```java
public java.lang.Object getDatastores();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>>

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `esxiHostsCount`<sup>Optional</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `hcxAction`<sup>Optional</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction"></a>

```java
public java.lang.String getHcxAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialConfiguration`<sup>Optional</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration"></a>

```java
public java.lang.Object getInitialConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>>

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `initialSku`<sup>Optional</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku"></a>

```java
public java.lang.String getInitialSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `isHcxEnabled`<sup>Optional</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled"></a>

```java
public java.lang.Object getIsHcxEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `isSingleHostSddc`<sup>Optional</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc"></a>

```java
public java.lang.Object getIsSingleHostSddc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `nsxEdgeVtepVlanId`<sup>Optional</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Optional</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Optional</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `refreshHcxLicenseStatus`<sup>Optional</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus"></a>

```java
public java.lang.Object getRefreshHcxLicenseStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Optional</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys"></a>

```java
public java.util.List<java.lang.String> getReservingHcxOnPremiseLicenseKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts"></a>

```java
public OcvpSddcTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `vmotionVlanId`<sup>Optional</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Optional</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcDatastores <a name="OcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcDatastores;

OcvpSddcDatastores.builder()
    .blockVolumeIds(java.util.List<java.lang.String>)
    .datastoreType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcHcxOnPremLicenses <a name="OcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcHcxOnPremLicenses;

OcvpSddcHcxOnPremLicenses.builder()
    .build();
```


### OcvpSddcInitialConfiguration <a name="OcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfiguration;

OcvpSddcInitialConfiguration.builder()
    .initialClusterConfigurations(IResolvable)
    .initialClusterConfigurations(java.util.List<OcvpSddcInitialConfigurationInitialClusterConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>></code> | initial_cluster_configurations block. |

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations"></a>

```java
public java.lang.Object getInitialClusterConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>>

initial_cluster_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}

---

### OcvpSddcInitialConfigurationInitialClusterConfigurations <a name="OcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurations;

OcvpSddcInitialConfigurationInitialClusterConfigurations.builder()
    .computeAvailabilityDomain(java.lang.String)
    .esxiHostsCount(java.lang.Number)
    .vsphereType(java.lang.String)
//  .capacityReservationId(java.lang.String)
//  .datastores(IResolvable)
//  .datastores(java.util.List<OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores>)
//  .displayName(java.lang.String)
//  .initialCommitment(java.lang.String)
//  .initialHostOcpuCount(java.lang.Number)
//  .initialHostShapeName(java.lang.String)
//  .instanceDisplayNamePrefix(java.lang.String)
//  .isShieldedInstanceEnabled(java.lang.Boolean)
//  .isShieldedInstanceEnabled(IResolvable)
//  .networkConfiguration(OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration)
//  .workloadNetworkCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType">vsphereType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores">datastores</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>></code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment">initialCommitment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType"></a>

```java
public java.lang.String getVsphereType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores"></a>

```java
public java.lang.Object getDatastores();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>>

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `initialCommitment`<sup>Optional</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment"></a>

```java
public java.lang.String getInitialCommitment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}.

---

##### `initialHostOcpuCount`<sup>Optional</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initialHostShapeName`<sup>Optional</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `instanceDisplayNamePrefix`<sup>Optional</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `isShieldedInstanceEnabled`<sup>Optional</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}

---

##### `workloadNetworkCidr`<sup>Optional</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores;

OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.builder()
    .blockVolumeIds(java.util.List<java.lang.String>)
    .datastoreType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;

OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.builder()
    .nsxEdgeVtepVlanId(java.lang.String)
    .nsxVtepVlanId(java.lang.String)
    .provisioningSubnetId(java.lang.String)
    .vmotionVlanId(java.lang.String)
    .vsanVlanId(java.lang.String)
//  .hcxVlanId(java.lang.String)
//  .nsxEdgeUplink1VlanId(java.lang.String)
//  .nsxEdgeUplink2VlanId(java.lang.String)
//  .provisioningVlanId(java.lang.String)
//  .replicationVlanId(java.lang.String)
//  .vsphereVlanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `hcxVlanId`<sup>Optional</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `nsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `provisioningVlanId`<sup>Optional</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `replicationVlanId`<sup>Optional</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `vsphereVlanId`<sup>Optional</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

### OcvpSddcTimeouts <a name="OcvpSddcTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcTimeouts;

OcvpSddcTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

### OcvpSddcUpgradeLicenses <a name="OcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcUpgradeLicenses;

OcvpSddcUpgradeLicenses.builder()
    .build();
```


### OcvpSddcVsphereUpgradeObjects <a name="OcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcVsphereUpgradeObjects;

OcvpSddcVsphereUpgradeObjects.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpSddcDatastoresList <a name="OcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcDatastoresList;

new OcvpSddcDatastoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get"></a>

```java
public OcvpSddcDatastoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>>

---


### OcvpSddcDatastoresOutputReference <a name="OcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcDatastoresOutputReference;

new OcvpSddcDatastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput">blockVolumeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `blockVolumeIdsInput`<sup>Optional</sup> <a name="blockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput"></a>

```java
public java.lang.String getDatastoreTypeInput();
```

- *Type:* java.lang.String

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>

---


### OcvpSddcHcxOnPremLicensesList <a name="OcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcHcxOnPremLicensesList;

new OcvpSddcHcxOnPremLicensesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get"></a>

```java
public OcvpSddcHcxOnPremLicensesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OcvpSddcHcxOnPremLicensesOutputReference <a name="OcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcHcxOnPremLicensesOutputReference;

new OcvpSddcHcxOnPremLicensesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName">systemName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```java
public java.lang.String getSystemName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```java
public OcvpSddcHcxOnPremLicenses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput">blockVolumeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput">datastoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockVolumeIdsInput`<sup>Optional</sup> <a name="blockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datastoreTypeInput`<sup>Optional</sup> <a name="datastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput"></a>

```java
public java.lang.String getDatastoreTypeInput();
```

- *Type:* java.lang.String

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId">resetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">resetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">resetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId">resetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId">resetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId">resetVsphereVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHcxVlanId` <a name="resetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```java
public void resetHcxVlanId()
```

##### `resetNsxEdgeUplink1VlanId` <a name="resetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```java
public void resetNsxEdgeUplink1VlanId()
```

##### `resetNsxEdgeUplink2VlanId` <a name="resetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```java
public void resetNsxEdgeUplink2VlanId()
```

##### `resetProvisioningVlanId` <a name="resetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```java
public void resetProvisioningVlanId()
```

##### `resetReplicationVlanId` <a name="resetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```java
public void resetReplicationVlanId()
```

##### `resetVsphereVlanId` <a name="resetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```java
public void resetVsphereVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput">hcxVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">nsxEdgeUplink1VlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">nsxEdgeUplink2VlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">nsxEdgeVtepVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">nsxVtepVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">provisioningSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput">provisioningVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput">replicationVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput">vmotionVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput">vsanVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput">vsphereVlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hcxVlanIdInput`<sup>Optional</sup> <a name="hcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```java
public java.lang.String getHcxVlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="nsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="nsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```java
public java.lang.String getNsxEdgeVtepVlanIdInput();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanIdInput`<sup>Optional</sup> <a name="nsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```java
public java.lang.String getNsxVtepVlanIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetIdInput`<sup>Optional</sup> <a name="provisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```java
public java.lang.String getProvisioningSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `provisioningVlanIdInput`<sup>Optional</sup> <a name="provisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```java
public java.lang.String getProvisioningVlanIdInput();
```

- *Type:* java.lang.String

---

##### `replicationVlanIdInput`<sup>Optional</sup> <a name="replicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```java
public java.lang.String getReplicationVlanIdInput();
```

- *Type:* java.lang.String

---

##### `vmotionVlanIdInput`<sup>Optional</sup> <a name="vmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```java
public java.lang.String getVmotionVlanIdInput();
```

- *Type:* java.lang.String

---

##### `vsanVlanIdInput`<sup>Optional</sup> <a name="vsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```java
public java.lang.String getVsanVlanIdInput();
```

- *Type:* java.lang.String

---

##### `vsphereVlanIdInput`<sup>Optional</sup> <a name="vsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```java
public java.lang.String getVsphereVlanIdInput();
```

- *Type:* java.lang.String

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference;

new OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores">putDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores">resetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment">resetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount">resetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName">resetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix">resetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled">resetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr">resetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatastores` <a name="putDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores"></a>

```java
public void putDatastores(IResolvable OR java.util.List<OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetDatastores` <a name="resetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores"></a>

```java
public void resetDatastores()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetInitialCommitment` <a name="resetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment"></a>

```java
public void resetInitialCommitment()
```

##### `resetInitialHostOcpuCount` <a name="resetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount"></a>

```java
public void resetInitialHostOcpuCount()
```

##### `resetInitialHostShapeName` <a name="resetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName"></a>

```java
public void resetInitialHostShapeName()
```

##### `resetInstanceDisplayNamePrefix` <a name="resetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix"></a>

```java
public void resetInstanceDisplayNamePrefix()
```

##### `resetIsShieldedInstanceEnabled` <a name="resetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled"></a>

```java
public void resetIsShieldedInstanceEnabled()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetWorkloadNetworkCidr` <a name="resetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr"></a>

```java
public void resetWorkloadNetworkCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput">datastoresInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput">esxiHostsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput">initialCommitmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput">initialHostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput">initialHostShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput">instanceDisplayNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput">isShieldedInstanceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput">vsphereTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput">workloadNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">initialCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">vsphereType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```java
public java.lang.Number getActualEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList getDatastores();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a>

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput"></a>

```java
public java.lang.String getComputeAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `datastoresInput`<sup>Optional</sup> <a name="datastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput"></a>

```java
public java.lang.Object getDatastoresInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `esxiHostsCountInput`<sup>Optional</sup> <a name="esxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput"></a>

```java
public java.lang.Number getEsxiHostsCountInput();
```

- *Type:* java.lang.Number

---

##### `initialCommitmentInput`<sup>Optional</sup> <a name="initialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput"></a>

```java
public java.lang.String getInitialCommitmentInput();
```

- *Type:* java.lang.String

---

##### `initialHostOcpuCountInput`<sup>Optional</sup> <a name="initialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput"></a>

```java
public java.lang.Number getInitialHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeNameInput`<sup>Optional</sup> <a name="initialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput"></a>

```java
public java.lang.String getInitialHostShapeNameInput();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="instanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput"></a>

```java
public java.lang.String getInstanceDisplayNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `isShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="isShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `vsphereTypeInput`<sup>Optional</sup> <a name="vsphereTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput"></a>

```java
public java.lang.String getVsphereTypeInput();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidrInput`<sup>Optional</sup> <a name="workloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput"></a>

```java
public java.lang.String getWorkloadNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```java
public java.lang.String getInitialCommitment();
```

- *Type:* java.lang.String

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```java
public java.lang.Object getIsShieldedInstanceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```java
public java.lang.String getVsphereType();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>

---


### OcvpSddcInitialConfigurationList <a name="OcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationList;

new OcvpSddcInitialConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get"></a>

```java
public OcvpSddcInitialConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>>

---


### OcvpSddcInitialConfigurationOutputReference <a name="OcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcInitialConfigurationOutputReference;

new OcvpSddcInitialConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations">putInitialClusterConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitialClusterConfigurations` <a name="putInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations"></a>

```java
public void putInitialClusterConfigurations(IResolvable OR java.util.List<OcvpSddcInitialConfigurationInitialClusterConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput">initialClusterConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```java
public OcvpSddcInitialConfigurationInitialClusterConfigurationsList getInitialClusterConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `initialClusterConfigurationsInput`<sup>Optional</sup> <a name="initialClusterConfigurationsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput"></a>

```java
public java.lang.Object getInitialClusterConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>

---


### OcvpSddcTimeoutsOutputReference <a name="OcvpSddcTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcTimeoutsOutputReference;

new OcvpSddcTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---


### OcvpSddcUpgradeLicensesList <a name="OcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcUpgradeLicensesList;

new OcvpSddcUpgradeLicensesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get"></a>

```java
public OcvpSddcUpgradeLicensesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OcvpSddcUpgradeLicensesOutputReference <a name="OcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcUpgradeLicensesOutputReference;

new OcvpSddcUpgradeLicensesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```java
public java.lang.String getLicenseKey();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```java
public OcvpSddcUpgradeLicenses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a>

---


### OcvpSddcVsphereUpgradeObjectsList <a name="OcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcVsphereUpgradeObjectsList;

new OcvpSddcVsphereUpgradeObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get"></a>

```java
public OcvpSddcVsphereUpgradeObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OcvpSddcVsphereUpgradeObjectsOutputReference <a name="OcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_sddc.OcvpSddcVsphereUpgradeObjectsOutputReference;

new OcvpSddcVsphereUpgradeObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```java
public java.lang.String getDownloadLink();
```

- *Type:* java.lang.String

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```java
public java.lang.String getLinkDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```java
public OcvpSddcVsphereUpgradeObjects getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a>

---



