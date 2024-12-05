# `dataOciComputeCloudAtCustomerCccInfrastructures` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructures <a name="DataOciComputeCloudAtCustomerCccInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str = None,
  ccc_infrastructure_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `ccc_infrastructure_id`<sup>Optional</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.cccInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId">reset_ccc_infrastructure_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_ccc_infrastructure_id` <a name="reset_ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId"></a>

```python
def reset_ccc_infrastructure_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection">ccc_infrastructure_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput">ccc_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ccc_infrastructure_collection`<sup>Required</sup> <a name="ccc_infrastructure_collection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection"></a>

```python
ccc_infrastructure_collection: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter"></a>

```python
filter: DataOciComputeCloudAtCustomerCccInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `ccc_infrastructure_id_input`<sup>Optional</sup> <a name="ccc_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput"></a>

```python
ccc_infrastructure_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `ccc_infrastructure_id`<sup>Required</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId"></a>

```python
ccc_infrastructure_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation()
```


### DataOciComputeCloudAtCustomerCccInfrastructuresConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str = None,
  ccc_infrastructure_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `ccc_infrastructure_id`<sup>Optional</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId"></a>

```python
ccc_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

### DataOciComputeCloudAtCustomerCccInfrastructuresFilter <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacity_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount">compute_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount">management_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performance_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_storage_tray_count`<sup>Required</sup> <a name="capacity_storage_tray_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```python
capacity_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_node_count`<sup>Required</sup> <a name="compute_node_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```python
compute_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_node_count`<sup>Required</sup> <a name="management_node_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```python
management_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_storage_tray_count`<sup>Required</sup> <a name="performance_storage_tray_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```python
performance_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgp_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracle_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peer_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_topology`<sup>Required</sup> <a name="bgp_topology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```python
bgp_topology: str
```

- *Type:* str

---

##### `oracle_asn`<sup>Required</sup> <a name="oracle_asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```python
oracle_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_information`<sup>Required</sup> <a name="peer_information" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```python
peer_information: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplink_hsrp_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplink_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uplink_hsrp_group`<sup>Required</sup> <a name="uplink_hsrp_group" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```python
uplink_hsrp_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan`<sup>Required</sup> <a name="uplink_vlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```python
uplink_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructure_routing_dynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructure_routing_static</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes">management_nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmt_vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmt_vip_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps">spine_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip">spine_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplink_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplink_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplink_netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplink_port_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplink_port_forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplink_port_speed_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplink_vlan_mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_routing_dynamic`<sup>Required</sup> <a name="infrastructure_routing_dynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```python
infrastructure_routing_dynamic: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructure_routing_static`<sup>Required</sup> <a name="infrastructure_routing_static" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```python
infrastructure_routing_static: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `management_nodes`<sup>Required</sup> <a name="management_nodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```python
management_nodes: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmt_vip_hostname`<sup>Required</sup> <a name="mgmt_vip_hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```python
mgmt_vip_hostname: str
```

- *Type:* str

---

##### `mgmt_vip_ip`<sup>Required</sup> <a name="mgmt_vip_ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```python
mgmt_vip_ip: str
```

- *Type:* str

---

##### `spine_ips`<sup>Required</sup> <a name="spine_ips" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```python
spine_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spine_vip`<sup>Required</sup> <a name="spine_vip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```python
spine_vip: str
```

- *Type:* str

---

##### `uplink_domain`<sup>Required</sup> <a name="uplink_domain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```python
uplink_domain: str
```

- *Type:* str

---

##### `uplink_gateway_ip`<sup>Required</sup> <a name="uplink_gateway_ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```python
uplink_gateway_ip: str
```

- *Type:* str

---

##### `uplink_netmask`<sup>Required</sup> <a name="uplink_netmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```python
uplink_netmask: str
```

- *Type:* str

---

##### `uplink_port_count`<sup>Required</sup> <a name="uplink_port_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```python
uplink_port_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_port_forward_error_correction`<sup>Required</sup> <a name="uplink_port_forward_error_correction" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```python
uplink_port_forward_error_correction: str
```

- *Type:* str

---

##### `uplink_port_speed_in_gbps`<sup>Required</sup> <a name="uplink_port_speed_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```python
uplink_port_speed_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan_mtu`<sup>Required</sup> <a name="uplink_vlan_mtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```python
uplink_vlan_mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails">connection_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory">infrastructure_inventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration">infrastructure_network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint">provisioning_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin">provisioning_pin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation">upgrade_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ccc_upgrade_schedule_id`<sup>Required</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails"></a>

```python
connection_details: str
```

- *Type:* str

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_inventory`<sup>Required</sup> <a name="infrastructure_inventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory"></a>

```python
infrastructure_inventory: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a>

---

##### `infrastructure_network_configuration`<sup>Required</sup> <a name="infrastructure_network_configuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration"></a>

```python
infrastructure_network_configuration: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `provisioning_fingerprint`<sup>Required</sup> <a name="provisioning_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint"></a>

```python
provisioning_fingerprint: str
```

- *Type:* str

---

##### `provisioning_pin`<sup>Required</sup> <a name="provisioning_pin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin"></a>

```python
provisioning_pin: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgrade_information`<sup>Required</sup> <a name="upgrade_information" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation"></a>

```python
upgrade_information: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduled_upgrade_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">time_of_scheduled_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_upgrade_duration`<sup>Required</sup> <a name="scheduled_upgrade_duration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```python
scheduled_upgrade_duration: str
```

- *Type:* str

---

##### `time_of_scheduled_upgrade`<sup>Required</sup> <a name="time_of_scheduled_upgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```python
time_of_scheduled_upgrade: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items"></a>

```python
items: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]]

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructures

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciComputeCloudAtCustomerCccInfrastructuresFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>]

---



