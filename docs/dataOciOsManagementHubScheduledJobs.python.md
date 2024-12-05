# `dataOciOsManagementHubScheduledJobs` Submodule <a name="`dataOciOsManagementHubScheduledJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubScheduledJobs <a name="DataOciOsManagementHubScheduledJobs" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs oci_os_management_hub_scheduled_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_restricted: typing.Union[bool, IResolvable] = None,
  lifecycle_stage_id: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_compartment_id: str = None,
  managed_instance_group_id: str = None,
  managed_instance_id: str = None,
  operation_type: str = None,
  schedule_type: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.isRestricted">is_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedCompartmentId">managed_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.operationType">operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#filter DataOciOsManagementHubScheduledJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}.

---

##### `is_restricted`<sup>Optional</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.isRestricted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}.

---

##### `lifecycle_stage_id`<sup>Optional</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.lifecycleStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.location"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}.

---

##### `managed_compartment_id`<sup>Optional</sup> <a name="managed_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}.

---

##### `managed_instance_group_id`<sup>Optional</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}.

---

##### `operation_type`<sup>Optional</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.operationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}.

---

##### `schedule_type`<sup>Optional</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scheduleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux">reset_is_managed_by_autonomous_linux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted">reset_is_restricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId">reset_lifecycle_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo">reset_location_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId">reset_managed_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId">reset_managed_instance_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType">reset_operation_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType">reset_schedule_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_managed_by_autonomous_linux` <a name="reset_is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux"></a>

```python
def reset_is_managed_by_autonomous_linux() -> None
```

##### `reset_is_restricted` <a name="reset_is_restricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted"></a>

```python
def reset_is_restricted() -> None
```

##### `reset_lifecycle_stage_id` <a name="reset_lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId"></a>

```python
def reset_lifecycle_stage_id() -> None
```

##### `reset_location` <a name="reset_location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_not_equal_to` <a name="reset_location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo"></a>

```python
def reset_location_not_equal_to() -> None
```

##### `reset_managed_compartment_id` <a name="reset_managed_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId"></a>

```python
def reset_managed_compartment_id() -> None
```

##### `reset_managed_instance_group_id` <a name="reset_managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId"></a>

```python
def reset_managed_instance_group_id() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_operation_type` <a name="reset_operation_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType"></a>

```python
def reset_operation_type() -> None
```

##### `reset_schedule_type` <a name="reset_schedule_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType"></a>

```python
def reset_schedule_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubScheduledJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubScheduledJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubScheduledJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection">scheduled_job_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput">is_managed_by_autonomous_linux_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput">is_restricted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput">lifecycle_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput">location_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput">managed_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput">operation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput">schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted">is_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId">managed_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter"></a>

```python
filter: DataOciOsManagementHubScheduledJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a>

---

##### `scheduled_job_collection`<sup>Required</sup> <a name="scheduled_job_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection"></a>

```python
scheduled_job_collection: DataOciOsManagementHubScheduledJobsScheduledJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux_input`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput"></a>

```python
is_managed_by_autonomous_linux_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_restricted_input`<sup>Optional</sup> <a name="is_restricted_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput"></a>

```python
is_restricted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_stage_id_input`<sup>Optional</sup> <a name="lifecycle_stage_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput"></a>

```python
lifecycle_stage_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to_input`<sup>Optional</sup> <a name="location_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput"></a>

```python
location_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_compartment_id_input`<sup>Optional</sup> <a name="managed_compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput"></a>

```python
managed_compartment_id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `operation_type_input`<sup>Optional</sup> <a name="operation_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput"></a>

```python
operation_type_input: str
```

- *Type:* str

---

##### `schedule_type_input`<sup>Optional</sup> <a name="schedule_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput"></a>

```python
schedule_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted"></a>

```python
is_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to`<sup>Required</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_compartment_id`<sup>Required</sup> <a name="managed_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId"></a>

```python
managed_compartment_id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubScheduledJobsConfig <a name="DataOciOsManagementHubScheduledJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]] = None,
  id: str = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_restricted: typing.Union[bool, IResolvable] = None,
  lifecycle_stage_id: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_compartment_id: str = None,
  managed_instance_group_id: str = None,
  managed_instance_id: str = None,
  operation_type: str = None,
  schedule_type: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted">is_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId">managed_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType">operation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#filter DataOciOsManagementHubScheduledJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}.

---

##### `is_restricted`<sup>Optional</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted"></a>

```python
is_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}.

---

##### `lifecycle_stage_id`<sup>Optional</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}.

---

##### `managed_compartment_id`<sup>Optional</sup> <a name="managed_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId"></a>

```python
managed_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}.

---

##### `managed_instance_group_id`<sup>Optional</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}.

---

##### `operation_type`<sup>Optional</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}.

---

##### `schedule_type`<sup>Optional</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}.

---

### DataOciOsManagementHubScheduledJobsFilter <a name="DataOciOsManagementHubScheduledJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}.

---

### DataOciOsManagementHubScheduledJobsScheduledJobCollection <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove()
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubScheduledJobsFilterList <a name="DataOciOsManagementHubScheduledJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubScheduledJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]]

---


### DataOciOsManagementHubScheduledJobsFilterOutputReference <a name="DataOciOsManagementHubScheduledJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubScheduledJobsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter">DataOciOsManagementHubScheduledJobsFilter</a>]

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable">disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable">enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install">install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove">remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable`<sup>Required</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```python
disable: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```python
enable: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `install`<sup>Required</sup> <a name="install" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```python
install: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `remove`<sup>Required</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```python
remove: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails">manage_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames">package_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds">software_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails">switch_module_streams_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames">windows_update_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manage_module_streams_details`<sup>Required</sup> <a name="manage_module_streams_details" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```python
manage_module_streams_details: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a>

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `package_names`<sup>Required</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames"></a>

```python
package_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_ids`<sup>Required</sup> <a name="software_source_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds"></a>

```python
software_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `switch_module_streams_details`<sup>Required</sup> <a name="switch_module_streams_details" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```python
switch_module_streams_details: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a>

---

##### `windows_update_names`<sup>Required</sup> <a name="windows_update_names" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames"></a>

```python
windows_update_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted">is_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded">is_subcompartment_included</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds">lifecycle_stage_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds">managed_compartment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds">managed_instance_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds">managed_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations">operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule">recurring_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals">retry_intervals</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution">time_last_execution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution">time_next_execution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds">work_request_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted"></a>

```python
is_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_subcompartment_included`<sup>Required</sup> <a name="is_subcompartment_included" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded"></a>

```python
is_subcompartment_included: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_stage_ids`<sup>Required</sup> <a name="lifecycle_stage_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds"></a>

```python
lifecycle_stage_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_compartment_ids`<sup>Required</sup> <a name="managed_compartment_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds"></a>

```python
managed_compartment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_ids`<sup>Required</sup> <a name="managed_instance_group_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds"></a>

```python
managed_instance_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_ids`<sup>Required</sup> <a name="managed_instance_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds"></a>

```python
managed_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations"></a>

```python
operations: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a>

---

##### `recurring_rule`<sup>Required</sup> <a name="recurring_rule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule"></a>

```python
recurring_rule: str
```

- *Type:* str

---

##### `retry_intervals`<sup>Required</sup> <a name="retry_intervals" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals"></a>

```python
retry_intervals: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_execution`<sup>Required</sup> <a name="time_last_execution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution"></a>

```python
time_last_execution: str
```

- *Type:* str

---

##### `time_next_execution`<sup>Required</sup> <a name="time_next_execution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution"></a>

```python
time_next_execution: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_ids`<sup>Required</sup> <a name="work_request_ids" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds"></a>

```python
work_request_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_scheduled_jobs

dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubScheduledJobsScheduledJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a>

---



