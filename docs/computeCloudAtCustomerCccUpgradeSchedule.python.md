# `computeCloudAtCustomerCccUpgradeSchedule` Submodule <a name="`computeCloudAtCustomerCccUpgradeSchedule` Submodule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCloudAtCustomerCccUpgradeSchedule <a name="ComputeCloudAtCustomerCccUpgradeSchedule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule(
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
  events: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.events">events</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]</code> | events block. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}.

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.events"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#events ComputeCloudAtCustomerCccUpgradeSchedule#events}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#timeouts ComputeCloudAtCustomerCccUpgradeSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents">put_events</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_events` <a name="put_events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents"></a>

```python
def put_events(
  value: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeCloudAtCustomerCccUpgradeSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeCloudAtCustomerCccUpgradeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCloudAtCustomerCccUpgradeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events">events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds">infrastructure_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput">events_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events"></a>

```python
events: ComputeCloudAtCustomerCccUpgradeScheduleEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a>

---

##### `infrastructure_ids`<sup>Required</sup> <a name="infrastructure_ids" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds"></a>

```python
infrastructure_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts"></a>

```python
timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput"></a>

```python
events_input: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeCloudAtCustomerCccUpgradeScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleConfig <a name="ComputeCloudAtCustomerCccUpgradeScheduleConfig" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  events: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events">events</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]</code> | events block. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}.

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events"></a>

```python
events: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#events ComputeCloudAtCustomerCccUpgradeSchedule#events}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts"></a>

```python
timeouts: ComputeCloudAtCustomerCccUpgradeScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#timeouts ComputeCloudAtCustomerCccUpgradeSchedule#timeouts}

---

### ComputeCloudAtCustomerCccUpgradeScheduleEvents <a name="ComputeCloudAtCustomerCccUpgradeScheduleEvents" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents(
  description: str,
  schedule_event_duration: str,
  time_start: str,
  schedule_event_recurrences: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration">schedule_event_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences">schedule_event_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}. |

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `schedule_event_duration`<sup>Required</sup> <a name="schedule_event_duration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration"></a>

```python
schedule_event_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}.

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}.

---

##### `schedule_event_recurrences`<sup>Optional</sup> <a name="schedule_event_recurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences"></a>

```python
schedule_event_recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}.

---

### ComputeCloudAtCustomerCccUpgradeScheduleTimeouts <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleEventsList <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeCloudAtCustomerCccUpgradeScheduleEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]]

---


### ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences">reset_schedule_event_recurrences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule_event_recurrences` <a name="reset_schedule_event_recurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences"></a>

```python
def reset_schedule_event_recurrences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput">schedule_event_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput">schedule_event_recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration">schedule_event_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences">schedule_event_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `schedule_event_duration_input`<sup>Optional</sup> <a name="schedule_event_duration_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput"></a>

```python
schedule_event_duration_input: str
```

- *Type:* str

---

##### `schedule_event_recurrences_input`<sup>Optional</sup> <a name="schedule_event_recurrences_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput"></a>

```python
schedule_event_recurrences_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `schedule_event_duration`<sup>Required</sup> <a name="schedule_event_duration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration"></a>

```python
schedule_event_duration: str
```

- *Type:* str

---

##### `schedule_event_recurrences`<sup>Required</sup> <a name="schedule_event_recurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences"></a>

```python
schedule_event_recurrences: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeCloudAtCustomerCccUpgradeScheduleEvents]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents">ComputeCloudAtCustomerCccUpgradeScheduleEvents</a>]

---


### ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import compute_cloud_at_customer_ccc_upgrade_schedule

computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeCloudAtCustomerCccUpgradeScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>]

---



