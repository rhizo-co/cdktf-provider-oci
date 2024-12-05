# `dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslands <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslands" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands oci_core_compute_capacity_topology_compute_hpc_islands}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.computeCapacityTopologyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#filter DataOciCoreComputeCapacityTopologyComputeHpcIslands#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreComputeCapacityTopologyComputeHpcIslands that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection">compute_hpc_island_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput">compute_capacity_topology_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_hpc_island_collection`<sup>Required</sup> <a name="compute_hpc_island_collection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection"></a>

```python
compute_hpc_island_collection: DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter"></a>

```python
filter: DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_capacity_topology_id_input`<sup>Optional</sup> <a name="compute_capacity_topology_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput"></a>

```python
compute_capacity_topology_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection()
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems()
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#filter DataOciCoreComputeCapacityTopologyComputeHpcIslands#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId">compute_capacity_topology_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount">total_compute_bare_metal_host_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_capacity_topology_id`<sup>Required</sup> <a name="compute_capacity_topology_id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```python
compute_capacity_topology_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_compute_bare_metal_host_count`<sup>Required</sup> <a name="total_compute_bare_metal_host_count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount"></a>

```python
total_compute_bare_metal_host_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items"></a>

```python
items: DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]]

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_compute_capacity_topology_compute_hpc_islands

dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter</a>]

---



