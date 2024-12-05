# `dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeBareMetalHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHosts <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHosts" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts oci_core_compute_capacity_topology_compute_bare_metal_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_capacity_topology_id: str,
  availability_domain: str = None,
  compartment_id: str = None,
  compute_hpc_island_id: str = None,
  compute_local_block_id: str = None,
  compute_network_block_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeLocalBlockId">compute_local_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeNetworkBlockId">compute_network_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeCapacityTopologyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}.

---

##### `compute_hpc_island_id`<sup>Optional</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeHpcIslandId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}.

---

##### `compute_local_block_id`<sup>Optional</sup> <a name="compute_local_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeLocalBlockId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}.

---

##### `compute_network_block_id`<sup>Optional</sup> <a name="compute_network_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.computeNetworkBlockId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId">reset_compute_hpc_island_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId">reset_compute_local_block_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId">reset_compute_network_block_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compute_hpc_island_id` <a name="reset_compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeHpcIslandId"></a>

```python
def reset_compute_hpc_island_id() -> None
```

##### `reset_compute_local_block_id` <a name="reset_compute_local_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeLocalBlockId"></a>

```python
def reset_compute_local_block_id() -> None
```

##### `reset_compute_network_block_id` <a name="reset_compute_network_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetComputeNetworkBlockId"></a>

```python
def reset_compute_network_block_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeBareMetalHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreComputeCapacityTopologyComputeBareMetalHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeBareMetalHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection">compute_bare_metal_host_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput">compute_capacity_topology_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput">compute_hpc_island_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput">compute_local_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput">compute_network_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId">compute_local_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId">compute_network_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_bare_metal_host_collection`<sup>Required</sup> <a name="compute_bare_metal_host_collection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeBareMetalHostCollection"></a>

```python
compute_bare_metal_host_collection: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filter"></a>

```python
filter: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_capacity_topology_id_input`<sup>Optional</sup> <a name="compute_capacity_topology_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyIdInput"></a>

```python
compute_capacity_topology_id_input: str
```

- *Type:* str

---

##### `compute_hpc_island_id_input`<sup>Optional</sup> <a name="compute_hpc_island_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandIdInput"></a>

```python
compute_hpc_island_id_input: str
```

- *Type:* str

---

##### `compute_local_block_id_input`<sup>Optional</sup> <a name="compute_local_block_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockIdInput"></a>

```python
compute_local_block_id_input: str
```

- *Type:* str

---

##### `compute_network_block_id_input`<sup>Optional</sup> <a name="compute_network_block_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockIdInput"></a>

```python
compute_network_block_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `compute_hpc_island_id`<sup>Required</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

---

##### `compute_local_block_id`<sup>Required</sup> <a name="compute_local_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeLocalBlockId"></a>

```python
compute_local_block_id: str
```

- *Type:* str

---

##### `compute_network_block_id`<sup>Required</sup> <a name="compute_network_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.computeNetworkBlockId"></a>

```python
compute_network_block_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHosts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection()
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems()
```


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_capacity_topology_id: str,
  availability_domain: str = None,
  compartment_id: str = None,
  compute_hpc_island_id: str = None,
  compute_local_block_id: str = None,
  compute_network_block_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId">compute_local_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId">compute_network_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}.

---

##### `compute_hpc_island_id`<sup>Optional</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}.

---

##### `compute_local_block_id`<sup>Optional</sup> <a name="compute_local_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeLocalBlockId"></a>

```python
compute_local_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}.

---

##### `compute_network_block_id`<sup>Optional</sup> <a name="compute_network_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.computeNetworkBlockId"></a>

```python
compute_network_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId">compute_local_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId">compute_network_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape">instance_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `compute_hpc_island_id`<sup>Required</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

---

##### `compute_local_block_id`<sup>Required</sup> <a name="compute_local_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeLocalBlockId"></a>

```python
compute_local_block_id: str
```

- *Type:* str

---

##### `compute_network_block_id`<sup>Required</sup> <a name="compute_network_block_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.computeNetworkBlockId"></a>

```python
compute_network_block_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_shape`<sup>Required</sup> <a name="instance_shape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.instanceShape"></a>

```python
instance_shape: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.items"></a>

```python
items: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]]

---


### DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_bare_metal_hosts

dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeBareMetalHosts.DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter">DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter</a>]

---



