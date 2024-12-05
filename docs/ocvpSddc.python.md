# `ocvpSddc` Submodule <a name="`ocvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.ocvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpSddc <a name="OcvpSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddc(
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
  ssh_authorized_keys: str,
  vmware_software_version: str,
  capacity_reservation_id: str = None,
  compute_availability_domain: str = None,
  datastores: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  esxi_hosts_count: typing.Union[int, float] = None,
  esxi_software_version: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hcx_action: str = None,
  hcx_vlan_id: str = None,
  id: str = None,
  initial_configuration: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]] = None,
  initial_host_ocpu_count: typing.Union[int, float] = None,
  initial_host_shape_name: str = None,
  initial_sku: str = None,
  instance_display_name_prefix: str = None,
  is_hcx_enabled: typing.Union[bool, IResolvable] = None,
  is_shielded_instance_enabled: typing.Union[bool, IResolvable] = None,
  is_single_host_sddc: typing.Union[bool, IResolvable] = None,
  nsx_edge_uplink1_vlan_id: str = None,
  nsx_edge_uplink2_vlan_id: str = None,
  nsx_edge_vtep_vlan_id: str = None,
  nsx_vtep_vlan_id: str = None,
  provisioning_subnet_id: str = None,
  provisioning_vlan_id: str = None,
  refresh_hcx_license_status: typing.Union[bool, IResolvable] = None,
  replication_vlan_id: str = None,
  reserving_hcx_on_premise_license_keys: typing.List[str] = None,
  timeouts: OcvpSddcTimeouts = None,
  vmotion_vlan_id: str = None,
  vsan_vlan_id: str = None,
  vsphere_vlan_id: str = None,
  workload_network_cidr: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.sshAuthorizedKeys">ssh_authorized_keys</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.datastores">datastores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxAction">hcx_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialConfiguration">initial_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]</code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialSku">initial_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isHcxEnabled">is_hcx_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isSingleHostSddc">is_single_host_sddc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.refreshHcxLicenseStatus">refresh_hcx_license_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.reservingHcxOnPremiseLicenseKeys">reserving_hcx_on_premise_license_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `ssh_authorized_keys`<sup>Required</sup> <a name="ssh_authorized_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.sshAuthorizedKeys"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmwareSoftwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.capacityReservationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `compute_availability_domain`<sup>Optional</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.computeAvailabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.datastores"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `esxi_hosts_count`<sup>Optional</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiHostsCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `esxi_software_version`<sup>Optional</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.esxiSoftwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `hcx_action`<sup>Optional</sup> <a name="hcx_action" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `hcx_vlan_id`<sup>Optional</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.hcxVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_configuration`<sup>Optional</sup> <a name="initial_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `initial_host_ocpu_count`<sup>Optional</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initial_host_shape_name`<sup>Optional</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialHostShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `initial_sku`<sup>Optional</sup> <a name="initial_sku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.initialSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `instance_display_name_prefix`<sup>Optional</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.instanceDisplayNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `is_hcx_enabled`<sup>Optional</sup> <a name="is_hcx_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isHcxEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `is_shielded_instance_enabled`<sup>Optional</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isShieldedInstanceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `is_single_host_sddc`<sup>Optional</sup> <a name="is_single_host_sddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.isSingleHostSddc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `nsx_edge_uplink1_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink1VlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsx_edge_uplink2_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeUplink2VlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `nsx_edge_vtep_vlan_id`<sup>Optional</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxEdgeVtepVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsx_vtep_vlan_id`<sup>Optional</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.nsxVtepVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioning_subnet_id`<sup>Optional</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `provisioning_vlan_id`<sup>Optional</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.provisioningVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `refresh_hcx_license_status`<sup>Optional</sup> <a name="refresh_hcx_license_status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.refreshHcxLicenseStatus"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `replication_vlan_id`<sup>Optional</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.replicationVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `reserving_hcx_on_premise_license_keys`<sup>Optional</sup> <a name="reserving_hcx_on_premise_license_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.reservingHcxOnPremiseLicenseKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `vmotion_vlan_id`<sup>Optional</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vmotionVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsan_vlan_id`<sup>Optional</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsanVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `vsphere_vlan_id`<sup>Optional</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.vsphereVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `workload_network_cidr`<sup>Optional</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.workloadNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores">put_datastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration">put_initial_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain">reset_compute_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores">reset_datastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount">reset_esxi_hosts_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion">reset_esxi_software_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction">reset_hcx_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId">reset_hcx_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration">reset_initial_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount">reset_initial_host_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName">reset_initial_host_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku">reset_initial_sku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix">reset_instance_display_name_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled">reset_is_hcx_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled">reset_is_shielded_instance_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc">reset_is_single_host_sddc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId">reset_nsx_edge_uplink1_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId">reset_nsx_edge_uplink2_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId">reset_nsx_edge_vtep_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId">reset_nsx_vtep_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId">reset_provisioning_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId">reset_provisioning_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus">reset_refresh_hcx_license_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId">reset_replication_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys">reset_reserving_hcx_on_premise_license_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId">reset_vmotion_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId">reset_vsan_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId">reset_vsphere_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr">reset_workload_network_cidr</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_datastores` <a name="put_datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores"></a>

```python
def put_datastores(
  value: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]

---

##### `put_initial_configuration` <a name="put_initial_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration"></a>

```python
def put_initial_configuration(
  value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_compute_availability_domain` <a name="reset_compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain"></a>

```python
def reset_compute_availability_domain() -> None
```

##### `reset_datastores` <a name="reset_datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores"></a>

```python
def reset_datastores() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_esxi_hosts_count` <a name="reset_esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount"></a>

```python
def reset_esxi_hosts_count() -> None
```

##### `reset_esxi_software_version` <a name="reset_esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion"></a>

```python
def reset_esxi_software_version() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hcx_action` <a name="reset_hcx_action" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction"></a>

```python
def reset_hcx_action() -> None
```

##### `reset_hcx_vlan_id` <a name="reset_hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId"></a>

```python
def reset_hcx_vlan_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_configuration` <a name="reset_initial_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration"></a>

```python
def reset_initial_configuration() -> None
```

##### `reset_initial_host_ocpu_count` <a name="reset_initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount"></a>

```python
def reset_initial_host_ocpu_count() -> None
```

##### `reset_initial_host_shape_name` <a name="reset_initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName"></a>

```python
def reset_initial_host_shape_name() -> None
```

##### `reset_initial_sku` <a name="reset_initial_sku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku"></a>

```python
def reset_initial_sku() -> None
```

##### `reset_instance_display_name_prefix` <a name="reset_instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix"></a>

```python
def reset_instance_display_name_prefix() -> None
```

##### `reset_is_hcx_enabled` <a name="reset_is_hcx_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled"></a>

```python
def reset_is_hcx_enabled() -> None
```

##### `reset_is_shielded_instance_enabled` <a name="reset_is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled"></a>

```python
def reset_is_shielded_instance_enabled() -> None
```

##### `reset_is_single_host_sddc` <a name="reset_is_single_host_sddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc"></a>

```python
def reset_is_single_host_sddc() -> None
```

##### `reset_nsx_edge_uplink1_vlan_id` <a name="reset_nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId"></a>

```python
def reset_nsx_edge_uplink1_vlan_id() -> None
```

##### `reset_nsx_edge_uplink2_vlan_id` <a name="reset_nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId"></a>

```python
def reset_nsx_edge_uplink2_vlan_id() -> None
```

##### `reset_nsx_edge_vtep_vlan_id` <a name="reset_nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId"></a>

```python
def reset_nsx_edge_vtep_vlan_id() -> None
```

##### `reset_nsx_vtep_vlan_id` <a name="reset_nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId"></a>

```python
def reset_nsx_vtep_vlan_id() -> None
```

##### `reset_provisioning_subnet_id` <a name="reset_provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId"></a>

```python
def reset_provisioning_subnet_id() -> None
```

##### `reset_provisioning_vlan_id` <a name="reset_provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId"></a>

```python
def reset_provisioning_vlan_id() -> None
```

##### `reset_refresh_hcx_license_status` <a name="reset_refresh_hcx_license_status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus"></a>

```python
def reset_refresh_hcx_license_status() -> None
```

##### `reset_replication_vlan_id` <a name="reset_replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId"></a>

```python
def reset_replication_vlan_id() -> None
```

##### `reset_reserving_hcx_on_premise_license_keys` <a name="reset_reserving_hcx_on_premise_license_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys"></a>

```python
def reset_reserving_hcx_on_premise_license_keys() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vmotion_vlan_id` <a name="reset_vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId"></a>

```python
def reset_vmotion_vlan_id() -> None
```

##### `reset_vsan_vlan_id` <a name="reset_vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId"></a>

```python
def reset_vsan_vlan_id() -> None
```

##### `reset_vsphere_vlan_id` <a name="reset_vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId"></a>

```python
def reset_vsphere_vlan_id() -> None
```

##### `reset_workload_network_cidr` <a name="reset_workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr"></a>

```python
def reset_workload_network_cidr() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddc.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OcvpSddc to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount">actual_esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount">clusters_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn">hcx_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword">hcx_initial_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode">hcx_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey">hcx_on_prem_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses">hcx_on_prem_licenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId">hcx_private_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration">initial_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled">is_hcx_enterprise_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade">is_hcx_pending_downgrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId">nsx_edge_uplink_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn">nsx_manager_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword">nsx_manager_initial_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId">nsx_manager_private_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername">nsx_manager_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName">nsx_overlay_segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd">time_hcx_billing_cycle_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated">time_hcx_license_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses">upgrade_licenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn">vcenter_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword">vcenter_initial_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId">vcenter_private_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername">vcenter_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide">vsphere_upgrade_guide</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects">vsphere_upgrade_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput">compute_availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput">datastores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput">esxi_hosts_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput">esxi_software_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput">hcx_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput">hcx_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput">initial_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput">initial_host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput">initial_host_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput">initial_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput">instance_display_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput">is_hcx_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput">is_shielded_instance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput">is_single_host_sddc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput">nsx_edge_uplink1_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput">nsx_edge_uplink2_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput">nsx_edge_vtep_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput">nsx_vtep_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput">provisioning_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput">provisioning_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput">refresh_hcx_license_status_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput">replication_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput">reserving_hcx_on_premise_license_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput">ssh_authorized_keys_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput">vmotion_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput">vmware_software_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput">vsan_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput">vsphere_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput">workload_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction">hcx_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku">initial_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled">is_hcx_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc">is_single_host_sddc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus">refresh_hcx_license_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys">reserving_hcx_on_premise_license_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys">ssh_authorized_keys</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actual_esxi_hosts_count`<sup>Required</sup> <a name="actual_esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount"></a>

```python
actual_esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `clusters_count`<sup>Required</sup> <a name="clusters_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount"></a>

```python
clusters_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores"></a>

```python
datastores: OcvpSddcDatastoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a>

---

##### `hcx_fqdn`<sup>Required</sup> <a name="hcx_fqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn"></a>

```python
hcx_fqdn: str
```

- *Type:* str

---

##### `hcx_initial_password`<sup>Required</sup> <a name="hcx_initial_password" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword"></a>

```python
hcx_initial_password: str
```

- *Type:* str

---

##### `hcx_mode`<sup>Required</sup> <a name="hcx_mode" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode"></a>

```python
hcx_mode: str
```

- *Type:* str

---

##### `hcx_on_prem_key`<sup>Required</sup> <a name="hcx_on_prem_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey"></a>

```python
hcx_on_prem_key: str
```

- *Type:* str

---

##### `hcx_on_prem_licenses`<sup>Required</sup> <a name="hcx_on_prem_licenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses"></a>

```python
hcx_on_prem_licenses: OcvpSddcHcxOnPremLicensesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a>

---

##### `hcx_private_ip_id`<sup>Required</sup> <a name="hcx_private_ip_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId"></a>

```python
hcx_private_ip_id: str
```

- *Type:* str

---

##### `initial_configuration`<sup>Required</sup> <a name="initial_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration"></a>

```python
initial_configuration: OcvpSddcInitialConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a>

---

##### `is_hcx_enterprise_enabled`<sup>Required</sup> <a name="is_hcx_enterprise_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled"></a>

```python
is_hcx_enterprise_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hcx_pending_downgrade`<sup>Required</sup> <a name="is_hcx_pending_downgrade" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade"></a>

```python
is_hcx_pending_downgrade: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nsx_edge_uplink_ip_id`<sup>Required</sup> <a name="nsx_edge_uplink_ip_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId"></a>

```python
nsx_edge_uplink_ip_id: str
```

- *Type:* str

---

##### `nsx_manager_fqdn`<sup>Required</sup> <a name="nsx_manager_fqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn"></a>

```python
nsx_manager_fqdn: str
```

- *Type:* str

---

##### `nsx_manager_initial_password`<sup>Required</sup> <a name="nsx_manager_initial_password" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword"></a>

```python
nsx_manager_initial_password: str
```

- *Type:* str

---

##### `nsx_manager_private_ip_id`<sup>Required</sup> <a name="nsx_manager_private_ip_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId"></a>

```python
nsx_manager_private_ip_id: str
```

- *Type:* str

---

##### `nsx_manager_username`<sup>Required</sup> <a name="nsx_manager_username" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername"></a>

```python
nsx_manager_username: str
```

- *Type:* str

---

##### `nsx_overlay_segment_name`<sup>Required</sup> <a name="nsx_overlay_segment_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName"></a>

```python
nsx_overlay_segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_hcx_billing_cycle_end`<sup>Required</sup> <a name="time_hcx_billing_cycle_end" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd"></a>

```python
time_hcx_billing_cycle_end: str
```

- *Type:* str

---

##### `time_hcx_license_status_updated`<sup>Required</sup> <a name="time_hcx_license_status_updated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```python
time_hcx_license_status_updated: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts"></a>

```python
timeouts: OcvpSddcTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgrade_licenses`<sup>Required</sup> <a name="upgrade_licenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses"></a>

```python
upgrade_licenses: OcvpSddcUpgradeLicensesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a>

---

##### `vcenter_fqdn`<sup>Required</sup> <a name="vcenter_fqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn"></a>

```python
vcenter_fqdn: str
```

- *Type:* str

---

##### `vcenter_initial_password`<sup>Required</sup> <a name="vcenter_initial_password" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword"></a>

```python
vcenter_initial_password: str
```

- *Type:* str

---

##### `vcenter_private_ip_id`<sup>Required</sup> <a name="vcenter_private_ip_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId"></a>

```python
vcenter_private_ip_id: str
```

- *Type:* str

---

##### `vcenter_username`<sup>Required</sup> <a name="vcenter_username" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername"></a>

```python
vcenter_username: str
```

- *Type:* str

---

##### `vsphere_upgrade_guide`<sup>Required</sup> <a name="vsphere_upgrade_guide" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide"></a>

```python
vsphere_upgrade_guide: str
```

- *Type:* str

---

##### `vsphere_upgrade_objects`<sup>Required</sup> <a name="vsphere_upgrade_objects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects"></a>

```python
vsphere_upgrade_objects: OcvpSddcVsphereUpgradeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a>

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_availability_domain_input`<sup>Optional</sup> <a name="compute_availability_domain_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput"></a>

```python
compute_availability_domain_input: str
```

- *Type:* str

---

##### `datastores_input`<sup>Optional</sup> <a name="datastores_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput"></a>

```python
datastores_input: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `esxi_hosts_count_input`<sup>Optional</sup> <a name="esxi_hosts_count_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput"></a>

```python
esxi_hosts_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `esxi_software_version_input`<sup>Optional</sup> <a name="esxi_software_version_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput"></a>

```python
esxi_software_version_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hcx_action_input`<sup>Optional</sup> <a name="hcx_action_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput"></a>

```python
hcx_action_input: str
```

- *Type:* str

---

##### `hcx_vlan_id_input`<sup>Optional</sup> <a name="hcx_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput"></a>

```python
hcx_vlan_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_configuration_input`<sup>Optional</sup> <a name="initial_configuration_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput"></a>

```python
initial_configuration_input: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]

---

##### `initial_host_ocpu_count_input`<sup>Optional</sup> <a name="initial_host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput"></a>

```python
initial_host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_host_shape_name_input`<sup>Optional</sup> <a name="initial_host_shape_name_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput"></a>

```python
initial_host_shape_name_input: str
```

- *Type:* str

---

##### `initial_sku_input`<sup>Optional</sup> <a name="initial_sku_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput"></a>

```python
initial_sku_input: str
```

- *Type:* str

---

##### `instance_display_name_prefix_input`<sup>Optional</sup> <a name="instance_display_name_prefix_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput"></a>

```python
instance_display_name_prefix_input: str
```

- *Type:* str

---

##### `is_hcx_enabled_input`<sup>Optional</sup> <a name="is_hcx_enabled_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput"></a>

```python
is_hcx_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shielded_instance_enabled_input`<sup>Optional</sup> <a name="is_shielded_instance_enabled_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput"></a>

```python
is_shielded_instance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_single_host_sddc_input`<sup>Optional</sup> <a name="is_single_host_sddc_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput"></a>

```python
is_single_host_sddc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsx_edge_uplink1_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput"></a>

```python
nsx_edge_uplink1_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_edge_uplink2_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput"></a>

```python
nsx_edge_uplink2_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_edge_vtep_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_vtep_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput"></a>

```python
nsx_edge_vtep_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_vtep_vlan_id_input`<sup>Optional</sup> <a name="nsx_vtep_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput"></a>

```python
nsx_vtep_vlan_id_input: str
```

- *Type:* str

---

##### `provisioning_subnet_id_input`<sup>Optional</sup> <a name="provisioning_subnet_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput"></a>

```python
provisioning_subnet_id_input: str
```

- *Type:* str

---

##### `provisioning_vlan_id_input`<sup>Optional</sup> <a name="provisioning_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput"></a>

```python
provisioning_vlan_id_input: str
```

- *Type:* str

---

##### `refresh_hcx_license_status_input`<sup>Optional</sup> <a name="refresh_hcx_license_status_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput"></a>

```python
refresh_hcx_license_status_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_vlan_id_input`<sup>Optional</sup> <a name="replication_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput"></a>

```python
replication_vlan_id_input: str
```

- *Type:* str

---

##### `reserving_hcx_on_premise_license_keys_input`<sup>Optional</sup> <a name="reserving_hcx_on_premise_license_keys_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput"></a>

```python
reserving_hcx_on_premise_license_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_authorized_keys_input`<sup>Optional</sup> <a name="ssh_authorized_keys_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput"></a>

```python
ssh_authorized_keys_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OcvpSddcTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>]

---

##### `vmotion_vlan_id_input`<sup>Optional</sup> <a name="vmotion_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput"></a>

```python
vmotion_vlan_id_input: str
```

- *Type:* str

---

##### `vmware_software_version_input`<sup>Optional</sup> <a name="vmware_software_version_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput"></a>

```python
vmware_software_version_input: str
```

- *Type:* str

---

##### `vsan_vlan_id_input`<sup>Optional</sup> <a name="vsan_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput"></a>

```python
vsan_vlan_id_input: str
```

- *Type:* str

---

##### `vsphere_vlan_id_input`<sup>Optional</sup> <a name="vsphere_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput"></a>

```python
vsphere_vlan_id_input: str
```

- *Type:* str

---

##### `workload_network_cidr_input`<sup>Optional</sup> <a name="workload_network_cidr_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput"></a>

```python
workload_network_cidr_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `esxi_hosts_count`<sup>Required</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount"></a>

```python
esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `esxi_software_version`<sup>Required</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hcx_action`<sup>Required</sup> <a name="hcx_action" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction"></a>

```python
hcx_action: str
```

- *Type:* str

---

##### `hcx_vlan_id`<sup>Required</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId"></a>

```python
hcx_vlan_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_host_ocpu_count`<sup>Required</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount"></a>

```python
initial_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_host_shape_name`<sup>Required</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

---

##### `initial_sku`<sup>Required</sup> <a name="initial_sku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku"></a>

```python
initial_sku: str
```

- *Type:* str

---

##### `instance_display_name_prefix`<sup>Required</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix"></a>

```python
instance_display_name_prefix: str
```

- *Type:* str

---

##### `is_hcx_enabled`<sup>Required</sup> <a name="is_hcx_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled"></a>

```python
is_hcx_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shielded_instance_enabled`<sup>Required</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled"></a>

```python
is_shielded_instance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_single_host_sddc`<sup>Required</sup> <a name="is_single_host_sddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc"></a>

```python
is_single_host_sddc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsx_edge_uplink1_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```python
nsx_edge_uplink1_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_uplink2_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```python
nsx_edge_uplink2_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_vtep_vlan_id`<sup>Required</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId"></a>

```python
nsx_edge_vtep_vlan_id: str
```

- *Type:* str

---

##### `nsx_vtep_vlan_id`<sup>Required</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId"></a>

```python
nsx_vtep_vlan_id: str
```

- *Type:* str

---

##### `provisioning_subnet_id`<sup>Required</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId"></a>

```python
provisioning_subnet_id: str
```

- *Type:* str

---

##### `provisioning_vlan_id`<sup>Required</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId"></a>

```python
provisioning_vlan_id: str
```

- *Type:* str

---

##### `refresh_hcx_license_status`<sup>Required</sup> <a name="refresh_hcx_license_status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus"></a>

```python
refresh_hcx_license_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_vlan_id`<sup>Required</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId"></a>

```python
replication_vlan_id: str
```

- *Type:* str

---

##### `reserving_hcx_on_premise_license_keys`<sup>Required</sup> <a name="reserving_hcx_on_premise_license_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```python
reserving_hcx_on_premise_license_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_authorized_keys`<sup>Required</sup> <a name="ssh_authorized_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys"></a>

```python
ssh_authorized_keys: str
```

- *Type:* str

---

##### `vmotion_vlan_id`<sup>Required</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId"></a>

```python
vmotion_vlan_id: str
```

- *Type:* str

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion"></a>

```python
vmware_software_version: str
```

- *Type:* str

---

##### `vsan_vlan_id`<sup>Required</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId"></a>

```python
vsan_vlan_id: str
```

- *Type:* str

---

##### `vsphere_vlan_id`<sup>Required</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId"></a>

```python
vsphere_vlan_id: str
```

- *Type:* str

---

##### `workload_network_cidr`<sup>Required</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr"></a>

```python
workload_network_cidr: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpSddcConfig <a name="OcvpSddcConfig" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  ssh_authorized_keys: str,
  vmware_software_version: str,
  capacity_reservation_id: str = None,
  compute_availability_domain: str = None,
  datastores: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  esxi_hosts_count: typing.Union[int, float] = None,
  esxi_software_version: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hcx_action: str = None,
  hcx_vlan_id: str = None,
  id: str = None,
  initial_configuration: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]] = None,
  initial_host_ocpu_count: typing.Union[int, float] = None,
  initial_host_shape_name: str = None,
  initial_sku: str = None,
  instance_display_name_prefix: str = None,
  is_hcx_enabled: typing.Union[bool, IResolvable] = None,
  is_shielded_instance_enabled: typing.Union[bool, IResolvable] = None,
  is_single_host_sddc: typing.Union[bool, IResolvable] = None,
  nsx_edge_uplink1_vlan_id: str = None,
  nsx_edge_uplink2_vlan_id: str = None,
  nsx_edge_vtep_vlan_id: str = None,
  nsx_vtep_vlan_id: str = None,
  provisioning_subnet_id: str = None,
  provisioning_vlan_id: str = None,
  refresh_hcx_license_status: typing.Union[bool, IResolvable] = None,
  replication_vlan_id: str = None,
  reserving_hcx_on_premise_license_keys: typing.List[str] = None,
  timeouts: OcvpSddcTimeouts = None,
  vmotion_vlan_id: str = None,
  vsan_vlan_id: str = None,
  vsphere_vlan_id: str = None,
  workload_network_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys">ssh_authorized_keys</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores">datastores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction">hcx_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration">initial_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]</code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku">initial_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled">is_hcx_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc">is_single_host_sddc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus">refresh_hcx_license_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys">reserving_hcx_on_premise_license_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `ssh_authorized_keys`<sup>Required</sup> <a name="ssh_authorized_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys"></a>

```python
ssh_authorized_keys: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion"></a>

```python
vmware_software_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `compute_availability_domain`<sup>Optional</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores"></a>

```python
datastores: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `esxi_hosts_count`<sup>Optional</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount"></a>

```python
esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `esxi_software_version`<sup>Optional</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `hcx_action`<sup>Optional</sup> <a name="hcx_action" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction"></a>

```python
hcx_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `hcx_vlan_id`<sup>Optional</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId"></a>

```python
hcx_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_configuration`<sup>Optional</sup> <a name="initial_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration"></a>

```python
initial_configuration: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `initial_host_ocpu_count`<sup>Optional</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount"></a>

```python
initial_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initial_host_shape_name`<sup>Optional</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `initial_sku`<sup>Optional</sup> <a name="initial_sku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku"></a>

```python
initial_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `instance_display_name_prefix`<sup>Optional</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix"></a>

```python
instance_display_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `is_hcx_enabled`<sup>Optional</sup> <a name="is_hcx_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled"></a>

```python
is_hcx_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `is_shielded_instance_enabled`<sup>Optional</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled"></a>

```python
is_shielded_instance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `is_single_host_sddc`<sup>Optional</sup> <a name="is_single_host_sddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc"></a>

```python
is_single_host_sddc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `nsx_edge_uplink1_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId"></a>

```python
nsx_edge_uplink1_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsx_edge_uplink2_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId"></a>

```python
nsx_edge_uplink2_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `nsx_edge_vtep_vlan_id`<sup>Optional</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId"></a>

```python
nsx_edge_vtep_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsx_vtep_vlan_id`<sup>Optional</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId"></a>

```python
nsx_vtep_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioning_subnet_id`<sup>Optional</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId"></a>

```python
provisioning_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `provisioning_vlan_id`<sup>Optional</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId"></a>

```python
provisioning_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `refresh_hcx_license_status`<sup>Optional</sup> <a name="refresh_hcx_license_status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus"></a>

```python
refresh_hcx_license_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `replication_vlan_id`<sup>Optional</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId"></a>

```python
replication_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `reserving_hcx_on_premise_license_keys`<sup>Optional</sup> <a name="reserving_hcx_on_premise_license_keys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys"></a>

```python
reserving_hcx_on_premise_license_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts"></a>

```python
timeouts: OcvpSddcTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `vmotion_vlan_id`<sup>Optional</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId"></a>

```python
vmotion_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsan_vlan_id`<sup>Optional</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId"></a>

```python
vsan_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `vsphere_vlan_id`<sup>Optional</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId"></a>

```python
vsphere_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `workload_network_cidr`<sup>Optional</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr"></a>

```python
workload_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcDatastores <a name="OcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcDatastores(
  block_volume_ids: typing.List[str],
  datastore_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds">block_volume_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType">datastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `block_volume_ids`<sup>Required</sup> <a name="block_volume_ids" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds"></a>

```python
block_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcHcxOnPremLicenses <a name="OcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcHcxOnPremLicenses()
```


### OcvpSddcInitialConfiguration <a name="OcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfiguration(
  initial_cluster_configurations: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurations]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations">initial_cluster_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]</code> | initial_cluster_configurations block. |

---

##### `initial_cluster_configurations`<sup>Required</sup> <a name="initial_cluster_configurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations"></a>

```python
initial_cluster_configurations: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]

initial_cluster_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}

---

### OcvpSddcInitialConfigurationInitialClusterConfigurations <a name="OcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations(
  compute_availability_domain: str,
  esxi_hosts_count: typing.Union[int, float],
  vsphere_type: str,
  capacity_reservation_id: str = None,
  datastores: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]] = None,
  display_name: str = None,
  initial_commitment: str = None,
  initial_host_ocpu_count: typing.Union[int, float] = None,
  initial_host_shape_name: str = None,
  instance_display_name_prefix: str = None,
  is_shielded_instance_enabled: typing.Union[bool, IResolvable] = None,
  network_configuration: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration = None,
  workload_network_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType">vsphere_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores">datastores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment">initial_commitment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `esxi_hosts_count`<sup>Required</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount"></a>

```python
esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `vsphere_type`<sup>Required</sup> <a name="vsphere_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType"></a>

```python
vsphere_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `datastores`<sup>Optional</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores"></a>

```python
datastores: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `initial_commitment`<sup>Optional</sup> <a name="initial_commitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment"></a>

```python
initial_commitment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}.

---

##### `initial_host_ocpu_count`<sup>Optional</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount"></a>

```python
initial_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `initial_host_shape_name`<sup>Optional</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `instance_display_name_prefix`<sup>Optional</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix"></a>

```python
instance_display_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `is_shielded_instance_enabled`<sup>Optional</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled"></a>

```python
is_shielded_instance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration"></a>

```python
network_configuration: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}

---

##### `workload_network_cidr`<sup>Optional</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr"></a>

```python
workload_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores(
  block_volume_ids: typing.List[str],
  datastore_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds">block_volume_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType">datastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `block_volume_ids`<sup>Required</sup> <a name="block_volume_ids" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds"></a>

```python
block_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration(
  nsx_edge_vtep_vlan_id: str,
  nsx_vtep_vlan_id: str,
  provisioning_subnet_id: str,
  vmotion_vlan_id: str,
  vsan_vlan_id: str,
  hcx_vlan_id: str = None,
  nsx_edge_uplink1_vlan_id: str = None,
  nsx_edge_uplink2_vlan_id: str = None,
  provisioning_vlan_id: str = None,
  replication_vlan_id: str = None,
  vsphere_vlan_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |

---

##### `nsx_edge_vtep_vlan_id`<sup>Required</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```python
nsx_edge_vtep_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `nsx_vtep_vlan_id`<sup>Required</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId"></a>

```python
nsx_vtep_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `provisioning_subnet_id`<sup>Required</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId"></a>

```python
provisioning_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `vmotion_vlan_id`<sup>Required</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId"></a>

```python
vmotion_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `vsan_vlan_id`<sup>Required</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId"></a>

```python
vsan_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `hcx_vlan_id`<sup>Optional</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId"></a>

```python
hcx_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `nsx_edge_uplink1_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```python
nsx_edge_uplink1_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `nsx_edge_uplink2_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```python
nsx_edge_uplink2_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `provisioning_vlan_id`<sup>Optional</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId"></a>

```python
provisioning_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `replication_vlan_id`<sup>Optional</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId"></a>

```python
replication_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `vsphere_vlan_id`<sup>Optional</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId"></a>

```python
vsphere_vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

### OcvpSddcTimeouts <a name="OcvpSddcTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

### OcvpSddcUpgradeLicenses <a name="OcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcUpgradeLicenses()
```


### OcvpSddcVsphereUpgradeObjects <a name="OcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcVsphereUpgradeObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpSddcDatastoresList <a name="OcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcDatastoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OcvpSddcDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]]

---


### OcvpSddcDatastoresOutputReference <a name="OcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcDatastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput">block_volume_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput">datastore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds">block_volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType">datastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_volume_ids_input`<sup>Optional</sup> <a name="block_volume_ids_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```python
block_volume_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datastore_type_input`<sup>Optional</sup> <a name="datastore_type_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput"></a>

```python
datastore_type_input: str
```

- *Type:* str

---

##### `block_volume_ids`<sup>Required</sup> <a name="block_volume_ids" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```python
block_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpSddcDatastores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores">OcvpSddcDatastores</a>]

---


### OcvpSddcHcxOnPremLicensesList <a name="OcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcHcxOnPremLicensesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcHcxOnPremLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OcvpSddcHcxOnPremLicensesOutputReference <a name="OcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName">system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_key`<sup>Required</sup> <a name="activation_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_name`<sup>Required</sup> <a name="system_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```python
system_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```python
internal_value: OcvpSddcHcxOnPremLicenses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput">block_volume_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput">datastore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">block_volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">datastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_ids_input`<sup>Optional</sup> <a name="block_volume_ids_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```python
block_volume_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datastore_type_input`<sup>Optional</sup> <a name="datastore_type_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput"></a>

```python
datastore_type_input: str
```

- *Type:* str

---

##### `block_volume_ids`<sup>Required</sup> <a name="block_volume_ids" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```python
block_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId">reset_hcx_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">reset_nsx_edge_uplink1_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">reset_nsx_edge_uplink2_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId">reset_provisioning_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId">reset_replication_vlan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId">reset_vsphere_vlan_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hcx_vlan_id` <a name="reset_hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```python
def reset_hcx_vlan_id() -> None
```

##### `reset_nsx_edge_uplink1_vlan_id` <a name="reset_nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```python
def reset_nsx_edge_uplink1_vlan_id() -> None
```

##### `reset_nsx_edge_uplink2_vlan_id` <a name="reset_nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```python
def reset_nsx_edge_uplink2_vlan_id() -> None
```

##### `reset_provisioning_vlan_id` <a name="reset_provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```python
def reset_provisioning_vlan_id() -> None
```

##### `reset_replication_vlan_id` <a name="reset_replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```python
def reset_replication_vlan_id() -> None
```

##### `reset_vsphere_vlan_id` <a name="reset_vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```python
def reset_vsphere_vlan_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput">hcx_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">nsx_edge_uplink1_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">nsx_edge_uplink2_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">nsx_edge_vtep_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">nsx_vtep_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">provisioning_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput">provisioning_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput">replication_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput">vmotion_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput">vsan_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput">vsphere_vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hcx_vlan_id_input`<sup>Optional</sup> <a name="hcx_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```python
hcx_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_edge_uplink1_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```python
nsx_edge_uplink1_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_edge_uplink2_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```python
nsx_edge_uplink2_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_edge_vtep_vlan_id_input`<sup>Optional</sup> <a name="nsx_edge_vtep_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```python
nsx_edge_vtep_vlan_id_input: str
```

- *Type:* str

---

##### `nsx_vtep_vlan_id_input`<sup>Optional</sup> <a name="nsx_vtep_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```python
nsx_vtep_vlan_id_input: str
```

- *Type:* str

---

##### `provisioning_subnet_id_input`<sup>Optional</sup> <a name="provisioning_subnet_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```python
provisioning_subnet_id_input: str
```

- *Type:* str

---

##### `provisioning_vlan_id_input`<sup>Optional</sup> <a name="provisioning_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```python
provisioning_vlan_id_input: str
```

- *Type:* str

---

##### `replication_vlan_id_input`<sup>Optional</sup> <a name="replication_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```python
replication_vlan_id_input: str
```

- *Type:* str

---

##### `vmotion_vlan_id_input`<sup>Optional</sup> <a name="vmotion_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```python
vmotion_vlan_id_input: str
```

- *Type:* str

---

##### `vsan_vlan_id_input`<sup>Optional</sup> <a name="vsan_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```python
vsan_vlan_id_input: str
```

- *Type:* str

---

##### `vsphere_vlan_id_input`<sup>Optional</sup> <a name="vsphere_vlan_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```python
vsphere_vlan_id_input: str
```

- *Type:* str

---

##### `hcx_vlan_id`<sup>Required</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```python
hcx_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_uplink1_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```python
nsx_edge_uplink1_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_uplink2_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```python
nsx_edge_uplink2_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_vtep_vlan_id`<sup>Required</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```python
nsx_edge_vtep_vlan_id: str
```

- *Type:* str

---

##### `nsx_vtep_vlan_id`<sup>Required</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```python
nsx_vtep_vlan_id: str
```

- *Type:* str

---

##### `provisioning_subnet_id`<sup>Required</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```python
provisioning_subnet_id: str
```

- *Type:* str

---

##### `provisioning_vlan_id`<sup>Required</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```python
provisioning_vlan_id: str
```

- *Type:* str

---

##### `replication_vlan_id`<sup>Required</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```python
replication_vlan_id: str
```

- *Type:* str

---

##### `vmotion_vlan_id`<sup>Required</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```python
vmotion_vlan_id: str
```

- *Type:* str

---

##### `vsan_vlan_id`<sup>Required</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```python
vsan_vlan_id: str
```

- *Type:* str

---

##### `vsphere_vlan_id`<sup>Required</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```python
vsphere_vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores">put_datastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores">reset_datastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment">reset_initial_commitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount">reset_initial_host_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName">reset_initial_host_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix">reset_instance_display_name_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled">reset_is_shielded_instance_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr">reset_workload_network_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_datastores` <a name="put_datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores"></a>

```python
def put_datastores(
  value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  nsx_edge_vtep_vlan_id: str,
  nsx_vtep_vlan_id: str,
  provisioning_subnet_id: str,
  vmotion_vlan_id: str,
  vsan_vlan_id: str,
  hcx_vlan_id: str = None,
  nsx_edge_uplink1_vlan_id: str = None,
  nsx_edge_uplink2_vlan_id: str = None,
  provisioning_vlan_id: str = None,
  replication_vlan_id: str = None,
  vsphere_vlan_id: str = None
) -> None
```

###### `nsx_edge_vtep_vlan_id`<sup>Required</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.nsxEdgeVtepVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

###### `nsx_vtep_vlan_id`<sup>Required</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.nsxVtepVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

###### `provisioning_subnet_id`<sup>Required</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.provisioningSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

###### `vmotion_vlan_id`<sup>Required</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.vmotionVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

###### `vsan_vlan_id`<sup>Required</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.vsanVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

###### `hcx_vlan_id`<sup>Optional</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.hcxVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

###### `nsx_edge_uplink1_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.nsxEdgeUplink1VlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

###### `nsx_edge_uplink2_vlan_id`<sup>Optional</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.nsxEdgeUplink2VlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

###### `provisioning_vlan_id`<sup>Optional</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.provisioningVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

###### `replication_vlan_id`<sup>Optional</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.replicationVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

###### `vsphere_vlan_id`<sup>Optional</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.vsphereVlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_datastores` <a name="reset_datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores"></a>

```python
def reset_datastores() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_initial_commitment` <a name="reset_initial_commitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment"></a>

```python
def reset_initial_commitment() -> None
```

##### `reset_initial_host_ocpu_count` <a name="reset_initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount"></a>

```python
def reset_initial_host_ocpu_count() -> None
```

##### `reset_initial_host_shape_name` <a name="reset_initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName"></a>

```python
def reset_initial_host_shape_name() -> None
```

##### `reset_instance_display_name_prefix` <a name="reset_instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix"></a>

```python
def reset_instance_display_name_prefix() -> None
```

##### `reset_is_shielded_instance_enabled` <a name="reset_is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled"></a>

```python
def reset_is_shielded_instance_enabled() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_workload_network_cidr` <a name="reset_workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr"></a>

```python
def reset_workload_network_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">actual_esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput">compute_availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput">datastores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput">esxi_hosts_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput">initial_commitment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput">initial_host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput">initial_host_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput">instance_display_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput">is_shielded_instance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput">vsphere_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput">workload_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">initial_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">vsphere_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_esxi_hosts_count`<sup>Required</sup> <a name="actual_esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```python
actual_esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```python
datastores: OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```python
network_configuration: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a>

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `compute_availability_domain_input`<sup>Optional</sup> <a name="compute_availability_domain_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput"></a>

```python
compute_availability_domain_input: str
```

- *Type:* str

---

##### `datastores_input`<sup>Optional</sup> <a name="datastores_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput"></a>

```python
datastores_input: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `esxi_hosts_count_input`<sup>Optional</sup> <a name="esxi_hosts_count_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput"></a>

```python
esxi_hosts_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_commitment_input`<sup>Optional</sup> <a name="initial_commitment_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput"></a>

```python
initial_commitment_input: str
```

- *Type:* str

---

##### `initial_host_ocpu_count_input`<sup>Optional</sup> <a name="initial_host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput"></a>

```python
initial_host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_host_shape_name_input`<sup>Optional</sup> <a name="initial_host_shape_name_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput"></a>

```python
initial_host_shape_name_input: str
```

- *Type:* str

---

##### `instance_display_name_prefix_input`<sup>Optional</sup> <a name="instance_display_name_prefix_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput"></a>

```python
instance_display_name_prefix_input: str
```

- *Type:* str

---

##### `is_shielded_instance_enabled_input`<sup>Optional</sup> <a name="is_shielded_instance_enabled_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput"></a>

```python
is_shielded_instance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `vsphere_type_input`<sup>Optional</sup> <a name="vsphere_type_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput"></a>

```python
vsphere_type_input: str
```

- *Type:* str

---

##### `workload_network_cidr_input`<sup>Optional</sup> <a name="workload_network_cidr_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput"></a>

```python
workload_network_cidr_input: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `esxi_hosts_count`<sup>Required</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```python
esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_commitment`<sup>Required</sup> <a name="initial_commitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```python
initial_commitment: str
```

- *Type:* str

---

##### `initial_host_ocpu_count`<sup>Required</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```python
initial_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_host_shape_name`<sup>Required</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

---

##### `instance_display_name_prefix`<sup>Required</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```python
instance_display_name_prefix: str
```

- *Type:* str

---

##### `is_shielded_instance_enabled`<sup>Required</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```python
is_shielded_instance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vsphere_type`<sup>Required</sup> <a name="vsphere_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```python
vsphere_type: str
```

- *Type:* str

---

##### `workload_network_cidr`<sup>Required</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```python
workload_network_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpSddcInitialConfigurationInitialClusterConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]

---


### OcvpSddcInitialConfigurationList <a name="OcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcInitialConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]]

---


### OcvpSddcInitialConfigurationOutputReference <a name="OcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcInitialConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations">put_initial_cluster_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initial_cluster_configurations` <a name="put_initial_cluster_configurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations"></a>

```python
def put_initial_cluster_configurations(
  value: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">initial_cluster_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput">initial_cluster_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_cluster_configurations`<sup>Required</sup> <a name="initial_cluster_configurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```python
initial_cluster_configurations: OcvpSddcInitialConfigurationInitialClusterConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `initial_cluster_configurations_input`<sup>Optional</sup> <a name="initial_cluster_configurations_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput"></a>

```python
initial_cluster_configurations_input: typing.Union[IResolvable, typing.List[OcvpSddcInitialConfigurationInitialClusterConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations">OcvpSddcInitialConfigurationInitialClusterConfigurations</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpSddcInitialConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration">OcvpSddcInitialConfiguration</a>]

---


### OcvpSddcTimeoutsOutputReference <a name="OcvpSddcTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OcvpSddcTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>]

---


### OcvpSddcUpgradeLicensesList <a name="OcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcUpgradeLicensesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OcvpSddcUpgradeLicensesOutputReference <a name="OcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcUpgradeLicensesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey">license_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_key`<sup>Required</sup> <a name="license_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```python
license_key: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```python
internal_value: OcvpSddcUpgradeLicenses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a>

---


### OcvpSddcVsphereUpgradeObjectsList <a name="OcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcVsphereUpgradeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OcvpSddcVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OcvpSddcVsphereUpgradeObjectsOutputReference <a name="OcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ocvp_sddc

ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">download_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">link_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `download_link`<sup>Required</sup> <a name="download_link" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```python
download_link: str
```

- *Type:* str

---

##### `link_description`<sup>Required</sup> <a name="link_description" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```python
link_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: OcvpSddcVsphereUpgradeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a>

---



