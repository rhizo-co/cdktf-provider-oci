# `osManagementHubScheduledJob` Submodule <a name="`osManagementHubScheduledJob` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubScheduledJob <a name="OsManagementHubScheduledJob" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJob(
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
  operations: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]],
  schedule_type: str,
  time_next_execution: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_subcompartment_included: typing.Union[bool, IResolvable] = None,
  lifecycle_stage_ids: typing.List[str] = None,
  locations: typing.List[str] = None,
  managed_compartment_ids: typing.List[str] = None,
  managed_instance_group_ids: typing.List[str] = None,
  managed_instance_ids: typing.List[str] = None,
  recurring_rule: str = None,
  retry_intervals: typing.List[typing.Union[int, float]] = None,
  timeouts: OsManagementHubScheduledJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]</code> | operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.timeNextExecution">time_next_execution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.isSubcompartmentIncluded">is_subcompartment_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.lifecycleStageIds">lifecycle_stage_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.locations">locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedCompartmentIds">managed_compartment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedInstanceGroupIds">managed_instance_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.recurringRule">recurring_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.retryIntervals">retry_intervals</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operations OsManagementHubScheduledJob#operations}

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scheduleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}.

---

##### `time_next_execution`<sup>Required</sup> <a name="time_next_execution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.timeNextExecution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}.

---

##### `is_subcompartment_included`<sup>Optional</sup> <a name="is_subcompartment_included" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.isSubcompartmentIncluded"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}.

---

##### `lifecycle_stage_ids`<sup>Optional</sup> <a name="lifecycle_stage_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.lifecycleStageIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.locations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}.

---

##### `managed_compartment_ids`<sup>Optional</sup> <a name="managed_compartment_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedCompartmentIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}.

---

##### `managed_instance_group_ids`<sup>Optional</sup> <a name="managed_instance_group_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedInstanceGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}.

---

##### `managed_instance_ids`<sup>Optional</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.managedInstanceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}.

---

##### `recurring_rule`<sup>Optional</sup> <a name="recurring_rule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.recurringRule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}.

---

##### `retry_intervals`<sup>Optional</sup> <a name="retry_intervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.retryIntervals"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#timeouts OsManagementHubScheduledJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsManagedByAutonomousLinux">reset_is_managed_by_autonomous_linux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsSubcompartmentIncluded">reset_is_subcompartment_included</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLifecycleStageIds">reset_lifecycle_stage_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedCompartmentIds">reset_managed_compartment_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceGroupIds">reset_managed_instance_group_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceIds">reset_managed_instance_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRecurringRule">reset_recurring_rule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRetryIntervals">reset_retry_intervals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_operations` <a name="put_operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_managed_by_autonomous_linux` <a name="reset_is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsManagedByAutonomousLinux"></a>

```python
def reset_is_managed_by_autonomous_linux() -> None
```

##### `reset_is_subcompartment_included` <a name="reset_is_subcompartment_included" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsSubcompartmentIncluded"></a>

```python
def reset_is_subcompartment_included() -> None
```

##### `reset_lifecycle_stage_ids` <a name="reset_lifecycle_stage_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLifecycleStageIds"></a>

```python
def reset_lifecycle_stage_ids() -> None
```

##### `reset_locations` <a name="reset_locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_managed_compartment_ids` <a name="reset_managed_compartment_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedCompartmentIds"></a>

```python
def reset_managed_compartment_ids() -> None
```

##### `reset_managed_instance_group_ids` <a name="reset_managed_instance_group_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceGroupIds"></a>

```python
def reset_managed_instance_group_ids() -> None
```

##### `reset_managed_instance_ids` <a name="reset_managed_instance_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceIds"></a>

```python
def reset_managed_instance_ids() -> None
```

##### `reset_recurring_rule` <a name="reset_recurring_rule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRecurringRule"></a>

```python
def reset_recurring_rule() -> None
```

##### `reset_retry_intervals` <a name="reset_retry_intervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRetryIntervals"></a>

```python
def reset_retry_intervals() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubScheduledJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubScheduledJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubScheduledJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isRestricted">is_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operations">operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList">OsManagementHubScheduledJobOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeLastExecution">time_last_execution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference">OsManagementHubScheduledJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.workRequestIds">work_request_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinuxInput">is_managed_by_autonomous_linux_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncludedInput">is_subcompartment_included_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIdsInput">lifecycle_stage_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIdsInput">managed_compartment_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIdsInput">managed_instance_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIdsInput">managed_instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRuleInput">recurring_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervalsInput">retry_intervals_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleTypeInput">schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecutionInput">time_next_execution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncluded">is_subcompartment_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIds">lifecycle_stage_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIds">managed_compartment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIds">managed_instance_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRule">recurring_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervals">retry_intervals</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecution">time_next_execution</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isRestricted"></a>

```python
is_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operations"></a>

```python
operations: OsManagementHubScheduledJobOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList">OsManagementHubScheduledJobOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_execution`<sup>Required</sup> <a name="time_last_execution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeLastExecution"></a>

```python
time_last_execution: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeouts"></a>

```python
timeouts: OsManagementHubScheduledJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference">OsManagementHubScheduledJobTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_ids`<sup>Required</sup> <a name="work_request_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.workRequestIds"></a>

```python
work_request_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux_input`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinuxInput"></a>

```python
is_managed_by_autonomous_linux_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_subcompartment_included_input`<sup>Optional</sup> <a name="is_subcompartment_included_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncludedInput"></a>

```python
is_subcompartment_included_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_stage_ids_input`<sup>Optional</sup> <a name="lifecycle_stage_ids_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIdsInput"></a>

```python
lifecycle_stage_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_compartment_ids_input`<sup>Optional</sup> <a name="managed_compartment_ids_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIdsInput"></a>

```python
managed_compartment_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_ids_input`<sup>Optional</sup> <a name="managed_instance_group_ids_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIdsInput"></a>

```python
managed_instance_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_ids_input`<sup>Optional</sup> <a name="managed_instance_ids_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIdsInput"></a>

```python
managed_instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]

---

##### `recurring_rule_input`<sup>Optional</sup> <a name="recurring_rule_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRuleInput"></a>

```python
recurring_rule_input: str
```

- *Type:* str

---

##### `retry_intervals_input`<sup>Optional</sup> <a name="retry_intervals_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervalsInput"></a>

```python
retry_intervals_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schedule_type_input`<sup>Optional</sup> <a name="schedule_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleTypeInput"></a>

```python
schedule_type_input: str
```

- *Type:* str

---

##### `time_next_execution_input`<sup>Optional</sup> <a name="time_next_execution_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecutionInput"></a>

```python
time_next_execution_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubScheduledJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_subcompartment_included`<sup>Required</sup> <a name="is_subcompartment_included" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncluded"></a>

```python
is_subcompartment_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_stage_ids`<sup>Required</sup> <a name="lifecycle_stage_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIds"></a>

```python
lifecycle_stage_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_compartment_ids`<sup>Required</sup> <a name="managed_compartment_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIds"></a>

```python
managed_compartment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_ids`<sup>Required</sup> <a name="managed_instance_group_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIds"></a>

```python
managed_instance_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_ids`<sup>Required</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIds"></a>

```python
managed_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recurring_rule`<sup>Required</sup> <a name="recurring_rule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRule"></a>

```python
recurring_rule: str
```

- *Type:* str

---

##### `retry_intervals`<sup>Required</sup> <a name="retry_intervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervals"></a>

```python
retry_intervals: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `time_next_execution`<sup>Required</sup> <a name="time_next_execution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecution"></a>

```python
time_next_execution: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubScheduledJobConfig <a name="OsManagementHubScheduledJobConfig" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  operations: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]],
  schedule_type: str,
  time_next_execution: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_subcompartment_included: typing.Union[bool, IResolvable] = None,
  lifecycle_stage_ids: typing.List[str] = None,
  locations: typing.List[str] = None,
  managed_compartment_ids: typing.List[str] = None,
  managed_instance_group_ids: typing.List[str] = None,
  managed_instance_ids: typing.List[str] = None,
  recurring_rule: str = None,
  retry_intervals: typing.List[typing.Union[int, float]] = None,
  timeouts: OsManagementHubScheduledJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]</code> | operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeNextExecution">time_next_execution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isSubcompartmentIncluded">is_subcompartment_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycleStageIds">lifecycle_stage_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.locations">locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedCompartmentIds">managed_compartment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceGroupIds">managed_instance_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.recurringRule">recurring_rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.retryIntervals">retry_intervals</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operations OsManagementHubScheduledJob#operations}

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}.

---

##### `time_next_execution`<sup>Required</sup> <a name="time_next_execution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeNextExecution"></a>

```python
time_next_execution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}.

---

##### `is_subcompartment_included`<sup>Optional</sup> <a name="is_subcompartment_included" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isSubcompartmentIncluded"></a>

```python
is_subcompartment_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}.

---

##### `lifecycle_stage_ids`<sup>Optional</sup> <a name="lifecycle_stage_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycleStageIds"></a>

```python
lifecycle_stage_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}.

---

##### `managed_compartment_ids`<sup>Optional</sup> <a name="managed_compartment_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedCompartmentIds"></a>

```python
managed_compartment_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}.

---

##### `managed_instance_group_ids`<sup>Optional</sup> <a name="managed_instance_group_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceGroupIds"></a>

```python
managed_instance_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}.

---

##### `managed_instance_ids`<sup>Optional</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceIds"></a>

```python
managed_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}.

---

##### `recurring_rule`<sup>Optional</sup> <a name="recurring_rule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.recurringRule"></a>

```python
recurring_rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}.

---

##### `retry_intervals`<sup>Optional</sup> <a name="retry_intervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.retryIntervals"></a>

```python
retry_intervals: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubScheduledJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#timeouts OsManagementHubScheduledJob#timeouts}

---

### OsManagementHubScheduledJobOperations <a name="OsManagementHubScheduledJobOperations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperations(
  operation_type: str,
  manage_module_streams_details: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails = None,
  package_names: typing.List[str] = None,
  software_source_ids: typing.List[str] = None,
  switch_module_streams_details: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails = None,
  windows_update_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.operationType">operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operation_type OsManagementHubScheduledJob#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.manageModuleStreamsDetails">manage_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | manage_module_streams_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.packageNames">package_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#package_names OsManagementHubScheduledJob#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.softwareSourceIds">software_source_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_ids OsManagementHubScheduledJob#software_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.switchModuleStreamsDetails">switch_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | switch_module_streams_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.windowsUpdateNames">windows_update_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#windows_update_names OsManagementHubScheduledJob#windows_update_names}. |

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operation_type OsManagementHubScheduledJob#operation_type}.

---

##### `manage_module_streams_details`<sup>Optional</sup> <a name="manage_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.manageModuleStreamsDetails"></a>

```python
manage_module_streams_details: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

manage_module_streams_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#manage_module_streams_details OsManagementHubScheduledJob#manage_module_streams_details}

---

##### `package_names`<sup>Optional</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.packageNames"></a>

```python
package_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#package_names OsManagementHubScheduledJob#package_names}.

---

##### `software_source_ids`<sup>Optional</sup> <a name="software_source_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.softwareSourceIds"></a>

```python
software_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_ids OsManagementHubScheduledJob#software_source_ids}.

---

##### `switch_module_streams_details`<sup>Optional</sup> <a name="switch_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.switchModuleStreamsDetails"></a>

```python
switch_module_streams_details: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

switch_module_streams_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#switch_module_streams_details OsManagementHubScheduledJob#switch_module_streams_details}

---

##### `windows_update_names`<sup>Optional</sup> <a name="windows_update_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.windowsUpdateNames"></a>

```python
windows_update_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#windows_update_names OsManagementHubScheduledJob#windows_update_names}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetails <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails(
  disable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]] = None,
  enable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]] = None,
  install: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]] = None,
  remove: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.disable">disable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]</code> | disable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.enable">enable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]</code> | enable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.install">install</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]</code> | install block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.remove">remove</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]</code> | remove block. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.disable"></a>

```python
disable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#disable OsManagementHubScheduledJob#disable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.enable"></a>

```python
enable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#enable OsManagementHubScheduledJob#enable}

---

##### `install`<sup>Optional</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.install"></a>

```python
install: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#install OsManagementHubScheduledJob#install}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.remove"></a>

```python
remove: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#remove OsManagementHubScheduledJob#remove}

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable(
  module_name: str,
  stream_name: str,
  software_source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable(
  module_name: str,
  stream_name: str,
  software_source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall(
  module_name: str,
  profile_name: str,
  stream_name: str,
  software_source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove(
  module_name: str,
  profile_name: str,
  stream_name: str,
  software_source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails <a name="OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails(
  module_name: str,
  stream_name: str,
  software_source_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobTimeouts <a name="OsManagementHubScheduledJobTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubScheduledJobOperationsList <a name="OsManagementHubScheduledJobOperationsList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubScheduledJobOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable">put_disable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable">put_enable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall">put_install</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove">put_remove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetDisable">reset_disable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetInstall">reset_install</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetRemove">reset_remove</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disable` <a name="put_disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable"></a>

```python
def put_disable(
  value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]

---

##### `put_enable` <a name="put_enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable"></a>

```python
def put_enable(
  value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]

---

##### `put_install` <a name="put_install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall"></a>

```python
def put_install(
  value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]

---

##### `put_remove` <a name="put_remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove"></a>

```python
def put_remove(
  value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]

---

##### `reset_disable` <a name="reset_disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetDisable"></a>

```python
def reset_disable() -> None
```

##### `reset_enable` <a name="reset_enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_install` <a name="reset_install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetInstall"></a>

```python
def reset_install() -> None
```

##### `reset_remove` <a name="reset_remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable">disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable">enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install">install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove">remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disableInput">disable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.installInput">install_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.removeInput">remove_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable`<sup>Required</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```python
disable: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```python
enable: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `install`<sup>Required</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```python
install: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `remove`<sup>Required</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```python
remove: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `disable_input`<sup>Optional</sup> <a name="disable_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disableInput"></a>

```python
disable_input: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]

---

##### `install_input`<sup>Optional</sup> <a name="install_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.installInput"></a>

```python
install_input: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.removeInput"></a>

```python
remove_input: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]

---


### OsManagementHubScheduledJobOperationsOutputReference <a name="OsManagementHubScheduledJobOperationsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails">put_manage_module_streams_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails">put_switch_module_streams_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetManageModuleStreamsDetails">reset_manage_module_streams_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetPackageNames">reset_package_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSoftwareSourceIds">reset_software_source_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSwitchModuleStreamsDetails">reset_switch_module_streams_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetWindowsUpdateNames">reset_windows_update_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_manage_module_streams_details` <a name="put_manage_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails"></a>

```python
def put_manage_module_streams_details(
  disable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable]] = None,
  enable: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable]] = None,
  install: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall]] = None,
  remove: typing.Union[IResolvable, typing.List[OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove]] = None
) -> None
```

###### `disable`<sup>Optional</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails.parameter.disable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>]]

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#disable OsManagementHubScheduledJob#disable}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails.parameter.enable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>]]

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#enable OsManagementHubScheduledJob#enable}

---

###### `install`<sup>Optional</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails.parameter.install"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>]]

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#install OsManagementHubScheduledJob#install}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails.parameter.remove"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>]]

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#remove OsManagementHubScheduledJob#remove}

---

##### `put_switch_module_streams_details` <a name="put_switch_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails"></a>

```python
def put_switch_module_streams_details(
  module_name: str,
  stream_name: str,
  software_source_id: str = None
) -> None
```

###### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

###### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

###### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

##### `reset_manage_module_streams_details` <a name="reset_manage_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetManageModuleStreamsDetails"></a>

```python
def reset_manage_module_streams_details() -> None
```

##### `reset_package_names` <a name="reset_package_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetPackageNames"></a>

```python
def reset_package_names() -> None
```

##### `reset_software_source_ids` <a name="reset_software_source_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSoftwareSourceIds"></a>

```python
def reset_software_source_ids() -> None
```

##### `reset_switch_module_streams_details` <a name="reset_switch_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSwitchModuleStreamsDetails"></a>

```python
def reset_switch_module_streams_details() -> None
```

##### `reset_windows_update_names` <a name="reset_windows_update_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetWindowsUpdateNames"></a>

```python
def reset_windows_update_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails">manage_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails">switch_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetailsInput">manage_module_streams_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationTypeInput">operation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNamesInput">package_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIdsInput">software_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetailsInput">switch_module_streams_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNamesInput">windows_update_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNames">package_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds">software_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames">windows_update_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manage_module_streams_details`<sup>Required</sup> <a name="manage_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```python
manage_module_streams_details: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference</a>

---

##### `switch_module_streams_details`<sup>Required</sup> <a name="switch_module_streams_details" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```python
switch_module_streams_details: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference</a>

---

##### `manage_module_streams_details_input`<sup>Optional</sup> <a name="manage_module_streams_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetailsInput"></a>

```python
manage_module_streams_details_input: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---

##### `operation_type_input`<sup>Optional</sup> <a name="operation_type_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationTypeInput"></a>

```python
operation_type_input: str
```

- *Type:* str

---

##### `package_names_input`<sup>Optional</sup> <a name="package_names_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNamesInput"></a>

```python
package_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_ids_input`<sup>Optional</sup> <a name="software_source_ids_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIdsInput"></a>

```python
software_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `switch_module_streams_details_input`<sup>Optional</sup> <a name="switch_module_streams_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetailsInput"></a>

```python
switch_module_streams_details_input: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---

##### `windows_update_names_input`<sup>Optional</sup> <a name="windows_update_names_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNamesInput"></a>

```python
windows_update_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `package_names`<sup>Required</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNames"></a>

```python
package_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_ids`<sup>Required</sup> <a name="software_source_ids" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds"></a>

```python
software_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `windows_update_names`<sup>Required</sup> <a name="windows_update_names" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames"></a>

```python
windows_update_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>]

---


### OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference <a name="OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---


### OsManagementHubScheduledJobTimeoutsOutputReference <a name="OsManagementHubScheduledJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_scheduled_job

osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubScheduledJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>]

---



