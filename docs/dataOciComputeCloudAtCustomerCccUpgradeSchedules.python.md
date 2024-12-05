# `dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule <a name="`dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedules <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedules" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules oci_compute_cloud_at_customer_ccc_upgrade_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules(
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
  ccc_upgrade_schedule_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}.

---

##### `ccc_upgrade_schedule_id`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.cccUpgradeScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#filter DataOciComputeCloudAtCustomerCccUpgradeSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId">reset_ccc_upgrade_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_ccc_upgrade_schedule_id` <a name="reset_ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId"></a>

```python
def reset_ccc_upgrade_schedule_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection">ccc_upgrade_schedule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput">ccc_upgrade_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ccc_upgrade_schedule_collection`<sup>Required</sup> <a name="ccc_upgrade_schedule_collection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection"></a>

```python
ccc_upgrade_schedule_collection: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter"></a>

```python
filter: DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `ccc_upgrade_schedule_id_input`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput"></a>

```python
ccc_upgrade_schedule_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `ccc_upgrade_schedule_id`<sup>Required</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection()
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems()
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents()
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str = None,
  ccc_upgrade_schedule_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}.

---

##### `ccc_upgrade_schedule_id`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#filter DataOciComputeCloudAtCustomerCccUpgradeSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}.

---

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration">schedule_event_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences">schedule_event_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule_event_duration`<sup>Required</sup> <a name="schedule_event_duration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration"></a>

```python
schedule_event_duration: str
```

- *Type:* str

---

##### `schedule_event_recurrences`<sup>Required</sup> <a name="schedule_event_recurrences" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences"></a>

```python
schedule_event_recurrences: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events">events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds">infrastructure_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events"></a>

```python
events: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_ids`<sup>Required</sup> <a name="infrastructure_ids" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds"></a>

```python
infrastructure_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items"></a>

```python
items: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]]

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_upgrade_schedules

dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter</a>]

---



