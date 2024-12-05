# `dataOciOcvpEsxiHosts` Submodule <a name="`dataOciOcvpEsxiHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHosts <a name="DataOciOcvpEsxiHosts" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  compartment_id: str = None,
  compute_instance_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]] = None,
  id: str = None,
  is_billing_donors_only: typing.Union[bool, IResolvable] = None,
  is_swap_billing_only: typing.Union[bool, IResolvable] = None,
  sddc_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.computeInstanceId">compute_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isBillingDonorsOnly">is_billing_donors_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isSwapBillingOnly">is_swap_billing_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.sddcId">sddc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `compute_instance_id`<sup>Optional</sup> <a name="compute_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.computeInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_billing_donors_only`<sup>Optional</sup> <a name="is_billing_donors_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isBillingDonorsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `is_swap_billing_only`<sup>Optional</sup> <a name="is_swap_billing_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.isSwapBillingOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `sddc_id`<sup>Optional</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.sddcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId">reset_compute_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly">reset_is_billing_donors_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly">reset_is_swap_billing_only</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId">reset_sddc_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compute_instance_id` <a name="reset_compute_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId"></a>

```python
def reset_compute_instance_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_billing_donors_only` <a name="reset_is_billing_donors_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly"></a>

```python
def reset_is_billing_donors_only() -> None
```

##### `reset_is_swap_billing_only` <a name="reset_is_swap_billing_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly"></a>

```python
def reset_is_swap_billing_only() -> None
```

##### `reset_sddc_id` <a name="reset_sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId"></a>

```python
def reset_sddc_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOcvpEsxiHosts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOcvpEsxiHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection">esxi_host_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput">compute_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput">is_billing_donors_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput">is_swap_billing_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput">sddc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId">compute_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly">is_billing_donors_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly">is_swap_billing_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId">sddc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `esxi_host_collection`<sup>Required</sup> <a name="esxi_host_collection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection"></a>

```python
esxi_host_collection: DataOciOcvpEsxiHostsEsxiHostCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter"></a>

```python
filter: DataOciOcvpEsxiHostsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_instance_id_input`<sup>Optional</sup> <a name="compute_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput"></a>

```python
compute_instance_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_billing_donors_only_input`<sup>Optional</sup> <a name="is_billing_donors_only_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput"></a>

```python
is_billing_donors_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_swap_billing_only_input`<sup>Optional</sup> <a name="is_swap_billing_only_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput"></a>

```python
is_swap_billing_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sddc_id_input`<sup>Optional</sup> <a name="sddc_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput"></a>

```python
sddc_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_instance_id`<sup>Required</sup> <a name="compute_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId"></a>

```python
compute_instance_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_billing_donors_only`<sup>Required</sup> <a name="is_billing_donors_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly"></a>

```python
is_billing_donors_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_swap_billing_only`<sup>Required</sup> <a name="is_swap_billing_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly"></a>

```python
is_swap_billing_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sddc_id`<sup>Required</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostsConfig <a name="DataOciOcvpEsxiHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str = None,
  compartment_id: str = None,
  compute_instance_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]] = None,
  id: str = None,
  is_billing_donors_only: typing.Union[bool, IResolvable] = None,
  is_swap_billing_only: typing.Union[bool, IResolvable] = None,
  sddc_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId">compute_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly">is_billing_donors_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly">is_swap_billing_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId">sddc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `compute_instance_id`<sup>Optional</sup> <a name="compute_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId"></a>

```python
compute_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_billing_donors_only`<sup>Optional</sup> <a name="is_billing_donors_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly"></a>

```python
is_billing_donors_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `is_swap_billing_only`<sup>Optional</sup> <a name="is_swap_billing_only" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly"></a>

```python
is_swap_billing_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `sddc_id`<sup>Optional</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

### DataOciOcvpEsxiHostsEsxiHostCollection <a name="DataOciOcvpEsxiHostsEsxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection()
```


### DataOciOcvpEsxiHostsFilter <a name="DataOciOcvpEsxiHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpEsxiHostsEsxiHostCollectionList <a name="DataOciOcvpEsxiHostsEsxiHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference <a name="DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate">billing_contract_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId">billing_donor_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId">compute_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment">current_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku">current_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId">failed_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate">grace_period_end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount">host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName">host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress">is_billing_continuation_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress">is_billing_swapping_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment">next_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku">next_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId">non_upgraded_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId">replacement_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId">sddc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId">swap_billing_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId">upgraded_replacement_esxi_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_contract_end_date`<sup>Required</sup> <a name="billing_contract_end_date" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate"></a>

```python
billing_contract_end_date: str
```

- *Type:* str

---

##### `billing_donor_host_id`<sup>Required</sup> <a name="billing_donor_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId"></a>

```python
billing_donor_host_id: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

---

##### `compute_instance_id`<sup>Required</sup> <a name="compute_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId"></a>

```python
compute_instance_id: str
```

- *Type:* str

---

##### `current_commitment`<sup>Required</sup> <a name="current_commitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment"></a>

```python
current_commitment: str
```

- *Type:* str

---

##### `current_sku`<sup>Required</sup> <a name="current_sku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku"></a>

```python
current_sku: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `esxi_software_version`<sup>Required</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

---

##### `failed_esxi_host_id`<sup>Required</sup> <a name="failed_esxi_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId"></a>

```python
failed_esxi_host_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `grace_period_end_date`<sup>Required</sup> <a name="grace_period_end_date" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate"></a>

```python
grace_period_end_date: str
```

- *Type:* str

---

##### `host_ocpu_count`<sup>Required</sup> <a name="host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount"></a>

```python
host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_shape_name`<sup>Required</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName"></a>

```python
host_shape_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_billing_continuation_in_progress`<sup>Required</sup> <a name="is_billing_continuation_in_progress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress"></a>

```python
is_billing_continuation_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_billing_swapping_in_progress`<sup>Required</sup> <a name="is_billing_swapping_in_progress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress"></a>

```python
is_billing_swapping_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `next_commitment`<sup>Required</sup> <a name="next_commitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment"></a>

```python
next_commitment: str
```

- *Type:* str

---

##### `next_sku`<sup>Required</sup> <a name="next_sku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku"></a>

```python
next_sku: str
```

- *Type:* str

---

##### `non_upgraded_esxi_host_id`<sup>Required</sup> <a name="non_upgraded_esxi_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId"></a>

```python
non_upgraded_esxi_host_id: str
```

- *Type:* str

---

##### `replacement_esxi_host_id`<sup>Required</sup> <a name="replacement_esxi_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId"></a>

```python
replacement_esxi_host_id: str
```

- *Type:* str

---

##### `sddc_id`<sup>Required</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `swap_billing_host_id`<sup>Required</sup> <a name="swap_billing_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId"></a>

```python
swap_billing_host_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgraded_replacement_esxi_host_id`<sup>Required</sup> <a name="upgraded_replacement_esxi_host_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId"></a>

```python
upgraded_replacement_esxi_host_id: str
```

- *Type:* str

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```python
vmware_software_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpEsxiHostsEsxiHostCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a>

---


### DataOciOcvpEsxiHostsFilterList <a name="DataOciOcvpEsxiHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpEsxiHostsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOcvpEsxiHostsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]]

---


### DataOciOcvpEsxiHostsFilterOutputReference <a name="DataOciOcvpEsxiHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_esxi_hosts

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOcvpEsxiHostsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>]

---



