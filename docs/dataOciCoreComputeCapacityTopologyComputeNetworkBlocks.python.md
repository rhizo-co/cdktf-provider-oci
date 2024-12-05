# `dataOciCoreComputeCapacityTopologyComputeNetworkBlocks` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeNetworkBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocks <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks oci_core_compute_capacity_topology_compute_network_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.computeCapacityTopologyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}.

---

##### `compute_hpc_island_id`<sup>Optional</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.computeHpcIslandId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#filter DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetComputeHpcIslandId">reset_compute_hpc_island_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compute_hpc_island_id` <a name="reset_compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetComputeHpcIslandId"></a>

```python
def reset_compute_hpc_island_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeNetworkBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeNetworkBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeNetworkBlocks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreComputeCapacityTopologyComputeNetworkBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeNetworkBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeNetworkBlockCollection">compute_network_block_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyIdInput">compute_capacity_topology_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandIdInput">compute_hpc_island_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_network_block_collection`<sup>Required</sup> <a name="compute_network_block_collection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeNetworkBlockCollection"></a>

```python
compute_network_block_collection: DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filter"></a>

```python
filter: DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_capacity_topology_id_input`<sup>Optional</sup> <a name="compute_capacity_topology_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyIdInput"></a>

```python
compute_capacity_topology_id_input: str
```

- *Type:* str

---

##### `compute_hpc_island_id_input`<sup>Optional</sup> <a name="compute_hpc_island_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandIdInput"></a>

```python
compute_hpc_island_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `compute_hpc_island_id`<sup>Required</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection()
```


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems()
```


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}.

---

##### `compute_hpc_island_id`<sup>Optional</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#filter DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#name DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#values DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#regex DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#name DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#values DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#regex DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeHpcIslandId">compute_hpc_island_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.totalComputeBareMetalHostCount">total_compute_bare_metal_host_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `compute_hpc_island_id`<sup>Required</sup> <a name="compute_hpc_island_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeHpcIslandId"></a>

```python
compute_hpc_island_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_compute_bare_metal_host_count`<sup>Required</sup> <a name="total_compute_bare_metal_host_count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.totalComputeBareMetalHostCount"></a>

```python
total_compute_bare_metal_host_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.items"></a>

```python
items: DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]]

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_network_blocks

dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter</a>]

---



