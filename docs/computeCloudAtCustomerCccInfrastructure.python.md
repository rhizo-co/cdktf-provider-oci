# `computeCloudAtCustomerCccInfrastructure` Submodule <a name="`computeCloudAtCustomerCccInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCloudAtCustomerCccInfrastructure <a name="ComputeCloudAtCustomerCccInfrastructure" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure oci_compute_cloud_at_customer_ccc_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure(
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
  display_name: str,
  subnet_id: str,
  ccc_upgrade_schedule_id: str = None,
  connection_details: str = None,
  connection_state: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ComputeCloudAtCustomerCccInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#compartment_id ComputeCloudAtCustomerCccInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#display_name ComputeCloudAtCustomerCccInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#subnet_id ComputeCloudAtCustomerCccInfrastructure#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#ccc_upgrade_schedule_id ComputeCloudAtCustomerCccInfrastructure#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connectionDetails">connection_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_details ComputeCloudAtCustomerCccInfrastructure#connection_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connectionState">connection_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_state ComputeCloudAtCustomerCccInfrastructure#connection_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#defined_tags ComputeCloudAtCustomerCccInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#description ComputeCloudAtCustomerCccInfrastructure#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#freeform_tags ComputeCloudAtCustomerCccInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#id ComputeCloudAtCustomerCccInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#compartment_id ComputeCloudAtCustomerCccInfrastructure#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#display_name ComputeCloudAtCustomerCccInfrastructure#display_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#subnet_id ComputeCloudAtCustomerCccInfrastructure#subnet_id}.

---

##### `ccc_upgrade_schedule_id`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.cccUpgradeScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#ccc_upgrade_schedule_id ComputeCloudAtCustomerCccInfrastructure#ccc_upgrade_schedule_id}.

---

##### `connection_details`<sup>Optional</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connectionDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_details ComputeCloudAtCustomerCccInfrastructure#connection_details}.

---

##### `connection_state`<sup>Optional</sup> <a name="connection_state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connectionState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_state ComputeCloudAtCustomerCccInfrastructure#connection_state}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#defined_tags ComputeCloudAtCustomerCccInfrastructure#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#description ComputeCloudAtCustomerCccInfrastructure#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#freeform_tags ComputeCloudAtCustomerCccInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#id ComputeCloudAtCustomerCccInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#timeouts ComputeCloudAtCustomerCccInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetCccUpgradeScheduleId">reset_ccc_upgrade_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetConnectionDetails">reset_connection_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetConnectionState">reset_connection_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#create ComputeCloudAtCustomerCccInfrastructure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#delete ComputeCloudAtCustomerCccInfrastructure#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#update ComputeCloudAtCustomerCccInfrastructure#update}.

---

##### `reset_ccc_upgrade_schedule_id` <a name="reset_ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetCccUpgradeScheduleId"></a>

```python
def reset_ccc_upgrade_schedule_id() -> None
```

##### `reset_connection_details` <a name="reset_connection_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetConnectionDetails"></a>

```python
def reset_connection_details() -> None
```

##### `reset_connection_state` <a name="reset_connection_state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetConnectionState"></a>

```python
def reset_connection_state() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeCloudAtCustomerCccInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeCloudAtCustomerCccInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCloudAtCustomerCccInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory">infrastructure_inventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration">infrastructure_network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint">provisioning_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioningPin">provisioning_pin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference">ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation">upgrade_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleIdInput">ccc_upgrade_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionDetailsInput">connection_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionStateInput">connection_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionDetails">connection_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `infrastructure_inventory`<sup>Required</sup> <a name="infrastructure_inventory" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory"></a>

```python
infrastructure_inventory: ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a>

---

##### `infrastructure_network_configuration`<sup>Required</sup> <a name="infrastructure_network_configuration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration"></a>

```python
infrastructure_network_configuration: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `provisioning_fingerprint`<sup>Required</sup> <a name="provisioning_fingerprint" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint"></a>

```python
provisioning_fingerprint: str
```

- *Type:* str

---

##### `provisioning_pin`<sup>Required</sup> <a name="provisioning_pin" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.provisioningPin"></a>

```python
provisioning_pin: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeouts"></a>

```python
timeouts: ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference">ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgrade_information`<sup>Required</sup> <a name="upgrade_information" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation"></a>

```python
upgrade_information: ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a>

---

##### `ccc_upgrade_schedule_id_input`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleIdInput"></a>

```python
ccc_upgrade_schedule_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_details_input`<sup>Optional</sup> <a name="connection_details_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionDetailsInput"></a>

```python
connection_details_input: str
```

- *Type:* str

---

##### `connection_state_input`<sup>Optional</sup> <a name="connection_state_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionStateInput"></a>

```python
connection_state_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeCloudAtCustomerCccInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>]

---

##### `ccc_upgrade_schedule_id`<sup>Required</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionDetails"></a>

```python
connection_details: str
```

- *Type:* str

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeCloudAtCustomerCccInfrastructureConfig <a name="ComputeCloudAtCustomerCccInfrastructureConfig" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  subnet_id: str,
  ccc_upgrade_schedule_id: str = None,
  connection_details: str = None,
  connection_state: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ComputeCloudAtCustomerCccInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#compartment_id ComputeCloudAtCustomerCccInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#display_name ComputeCloudAtCustomerCccInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#subnet_id ComputeCloudAtCustomerCccInfrastructure#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#ccc_upgrade_schedule_id ComputeCloudAtCustomerCccInfrastructure#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connectionDetails">connection_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_details ComputeCloudAtCustomerCccInfrastructure#connection_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connectionState">connection_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_state ComputeCloudAtCustomerCccInfrastructure#connection_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#defined_tags ComputeCloudAtCustomerCccInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#description ComputeCloudAtCustomerCccInfrastructure#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#freeform_tags ComputeCloudAtCustomerCccInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#id ComputeCloudAtCustomerCccInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#compartment_id ComputeCloudAtCustomerCccInfrastructure#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#display_name ComputeCloudAtCustomerCccInfrastructure#display_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#subnet_id ComputeCloudAtCustomerCccInfrastructure#subnet_id}.

---

##### `ccc_upgrade_schedule_id`<sup>Optional</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#ccc_upgrade_schedule_id ComputeCloudAtCustomerCccInfrastructure#ccc_upgrade_schedule_id}.

---

##### `connection_details`<sup>Optional</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connectionDetails"></a>

```python
connection_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_details ComputeCloudAtCustomerCccInfrastructure#connection_details}.

---

##### `connection_state`<sup>Optional</sup> <a name="connection_state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#connection_state ComputeCloudAtCustomerCccInfrastructure#connection_state}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#defined_tags ComputeCloudAtCustomerCccInfrastructure#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#description ComputeCloudAtCustomerCccInfrastructure#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#freeform_tags ComputeCloudAtCustomerCccInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#id ComputeCloudAtCustomerCccInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureConfig.property.timeouts"></a>

```python
timeouts: ComputeCloudAtCustomerCccInfrastructureTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#timeouts ComputeCloudAtCustomerCccInfrastructure#timeouts}

---

### ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory()
```


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration()
```


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic()
```


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation()
```


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic()
```


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes()
```


### ComputeCloudAtCustomerCccInfrastructureTimeouts <a name="ComputeCloudAtCustomerCccInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#create ComputeCloudAtCustomerCccInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#delete ComputeCloudAtCustomerCccInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#update ComputeCloudAtCustomerCccInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#create ComputeCloudAtCustomerCccInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#delete ComputeCloudAtCustomerCccInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_infrastructure#update ComputeCloudAtCustomerCccInfrastructure#update}.

---

### ComputeCloudAtCustomerCccInfrastructureUpgradeInformation <a name="ComputeCloudAtCustomerCccInfrastructureUpgradeInformation" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformation()
```


## Classes <a name="Classes" id="Classes"></a>

### ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacity_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount">compute_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount">management_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performance_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_storage_tray_count`<sup>Required</sup> <a name="capacity_storage_tray_count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```python
capacity_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_node_count`<sup>Required</sup> <a name="compute_node_count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```python
compute_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_node_count`<sup>Required</sup> <a name="management_node_count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```python
management_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_storage_tray_count`<sup>Required</sup> <a name="performance_storage_tray_count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```python
performance_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">ComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a>

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgp_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracle_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peer_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_topology`<sup>Required</sup> <a name="bgp_topology" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```python
bgp_topology: str
```

- *Type:* str

---

##### `oracle_asn`<sup>Required</sup> <a name="oracle_asn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```python
oracle_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_information`<sup>Required</sup> <a name="peer_information" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```python
peer_information: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplink_hsrp_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplink_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uplink_hsrp_group`<sup>Required</sup> <a name="uplink_hsrp_group" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```python
uplink_hsrp_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan`<sup>Required</sup> <a name="uplink_vlan" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```python
uplink_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a>

---


### ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructure_routing_dynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructure_routing_static</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes">management_nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmt_vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmt_vip_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps">spine_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip">spine_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplink_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplink_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplink_netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplink_port_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplink_port_forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplink_port_speed_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplink_vlan_mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_routing_dynamic`<sup>Required</sup> <a name="infrastructure_routing_dynamic" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```python
infrastructure_routing_dynamic: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructure_routing_static`<sup>Required</sup> <a name="infrastructure_routing_static" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```python
infrastructure_routing_static: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `management_nodes`<sup>Required</sup> <a name="management_nodes" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```python
management_nodes: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmt_vip_hostname`<sup>Required</sup> <a name="mgmt_vip_hostname" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```python
mgmt_vip_hostname: str
```

- *Type:* str

---

##### `mgmt_vip_ip`<sup>Required</sup> <a name="mgmt_vip_ip" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```python
mgmt_vip_ip: str
```

- *Type:* str

---

##### `spine_ips`<sup>Required</sup> <a name="spine_ips" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```python
spine_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spine_vip`<sup>Required</sup> <a name="spine_vip" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```python
spine_vip: str
```

- *Type:* str

---

##### `uplink_domain`<sup>Required</sup> <a name="uplink_domain" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```python
uplink_domain: str
```

- *Type:* str

---

##### `uplink_gateway_ip`<sup>Required</sup> <a name="uplink_gateway_ip" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```python
uplink_gateway_ip: str
```

- *Type:* str

---

##### `uplink_netmask`<sup>Required</sup> <a name="uplink_netmask" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```python
uplink_netmask: str
```

- *Type:* str

---

##### `uplink_port_count`<sup>Required</sup> <a name="uplink_port_count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```python
uplink_port_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_port_forward_error_correction`<sup>Required</sup> <a name="uplink_port_forward_error_correction" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```python
uplink_port_forward_error_correction: str
```

- *Type:* str

---

##### `uplink_port_speed_in_gbps`<sup>Required</sup> <a name="uplink_port_speed_in_gbps" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```python
uplink_port_speed_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan_mtu`<sup>Required</sup> <a name="uplink_vlan_mtu" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```python
uplink_vlan_mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">ComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a>

---


### ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeCloudAtCustomerCccInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureTimeouts">ComputeCloudAtCustomerCccInfrastructureTimeouts</a>]

---


### ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList <a name="ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference <a name="ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_infrastructure

computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduled_upgrade_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">time_of_scheduled_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformation">ComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_upgrade_duration`<sup>Required</sup> <a name="scheduled_upgrade_duration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```python
scheduled_upgrade_duration: str
```

- *Type:* str

---

##### `time_of_scheduled_upgrade`<sup>Required</sup> <a name="time_of_scheduled_upgrade" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```python
time_of_scheduled_upgrade: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeCloudAtCustomerCccInfrastructureUpgradeInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccInfrastructure.ComputeCloudAtCustomerCccInfrastructureUpgradeInformation">ComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a>

---



