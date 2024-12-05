# `dataOciOsManagementHubManagedInstances` Submodule <a name="`dataOciOsManagementHubManagedInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstances <a name="DataOciOsManagementHubManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances oci_os_management_hub_managed_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  advisory_name: typing.List[str] = None,
  arch_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]] = None,
  group: str = None,
  group_not_equal_to: str = None,
  id: str = None,
  is_attached_to_group_or_lifecycle_stage: typing.Union[bool, IResolvable] = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_management_station: typing.Union[bool, IResolvable] = None,
  is_profile_attached: typing.Union[bool, IResolvable] = None,
  lifecycle_environment: str = None,
  lifecycle_environment_not_equal_to: str = None,
  lifecycle_stage: str = None,
  lifecycle_stage_not_equal_to: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_instance_id: str = None,
  os_family: typing.List[str] = None,
  profile: typing.List[str] = None,
  profile_not_equal_to: typing.List[str] = None,
  software_source_id: str = None,
  status: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.groupNotEqualTo">group_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isAttachedToGroupOrLifecycleStage">is_attached_to_group_or_lifecycle_stage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagementStation">is_management_station</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isProfileAttached">is_profile_attached</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironment">lifecycle_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironmentNotEqualTo">lifecycle_environment_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStageNotEqualTo">lifecycle_stage_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profile">profile</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profileNotEqualTo">profile_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advisory_name`<sup>Optional</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.advisoryName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}.

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.archType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#filter DataOciOsManagementHubManagedInstances#filter}

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}.

---

##### `group_not_equal_to`<sup>Optional</sup> <a name="group_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.groupNotEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_attached_to_group_or_lifecycle_stage`<sup>Optional</sup> <a name="is_attached_to_group_or_lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isAttachedToGroupOrLifecycleStage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}.

---

##### `is_management_station`<sup>Optional</sup> <a name="is_management_station" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagementStation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}.

---

##### `is_profile_attached`<sup>Optional</sup> <a name="is_profile_attached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isProfileAttached"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}.

---

##### `lifecycle_environment`<sup>Optional</sup> <a name="lifecycle_environment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}.

---

##### `lifecycle_environment_not_equal_to`<sup>Optional</sup> <a name="lifecycle_environment_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironmentNotEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}.

---

##### `lifecycle_stage_not_equal_to`<sup>Optional</sup> <a name="lifecycle_stage_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStageNotEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.location"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.osFamily"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profile"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}.

---

##### `profile_not_equal_to`<sup>Optional</sup> <a name="profile_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profileNotEqualTo"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.status"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetAdvisoryName">reset_advisory_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetArchType">reset_arch_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroupNotEqualTo">reset_group_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsAttachedToGroupOrLifecycleStage">reset_is_attached_to_group_or_lifecycle_stage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagedByAutonomousLinux">reset_is_managed_by_autonomous_linux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagementStation">reset_is_management_station</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsProfileAttached">reset_is_profile_attached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironment">reset_lifecycle_environment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironmentNotEqualTo">reset_lifecycle_environment_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStage">reset_lifecycle_stage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStageNotEqualTo">reset_lifecycle_stage_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocationNotEqualTo">reset_location_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOsFamily">reset_os_family</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfileNotEqualTo">reset_profile_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]

---

##### `reset_advisory_name` <a name="reset_advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetAdvisoryName"></a>

```python
def reset_advisory_name() -> None
```

##### `reset_arch_type` <a name="reset_arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetArchType"></a>

```python
def reset_arch_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group` <a name="reset_group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_group_not_equal_to` <a name="reset_group_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroupNotEqualTo"></a>

```python
def reset_group_not_equal_to() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_attached_to_group_or_lifecycle_stage` <a name="reset_is_attached_to_group_or_lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsAttachedToGroupOrLifecycleStage"></a>

```python
def reset_is_attached_to_group_or_lifecycle_stage() -> None
```

##### `reset_is_managed_by_autonomous_linux` <a name="reset_is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagedByAutonomousLinux"></a>

```python
def reset_is_managed_by_autonomous_linux() -> None
```

##### `reset_is_management_station` <a name="reset_is_management_station" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagementStation"></a>

```python
def reset_is_management_station() -> None
```

##### `reset_is_profile_attached` <a name="reset_is_profile_attached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsProfileAttached"></a>

```python
def reset_is_profile_attached() -> None
```

##### `reset_lifecycle_environment` <a name="reset_lifecycle_environment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironment"></a>

```python
def reset_lifecycle_environment() -> None
```

##### `reset_lifecycle_environment_not_equal_to` <a name="reset_lifecycle_environment_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironmentNotEqualTo"></a>

```python
def reset_lifecycle_environment_not_equal_to() -> None
```

##### `reset_lifecycle_stage` <a name="reset_lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStage"></a>

```python
def reset_lifecycle_stage() -> None
```

##### `reset_lifecycle_stage_not_equal_to` <a name="reset_lifecycle_stage_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStageNotEqualTo"></a>

```python
def reset_lifecycle_stage_not_equal_to() -> None
```

##### `reset_location` <a name="reset_location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_not_equal_to` <a name="reset_location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocationNotEqualTo"></a>

```python
def reset_location_not_equal_to() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_os_family` <a name="reset_os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOsFamily"></a>

```python
def reset_os_family() -> None
```

##### `reset_profile` <a name="reset_profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_profile_not_equal_to` <a name="reset_profile_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfileNotEqualTo"></a>

```python
def reset_profile_not_equal_to() -> None
```

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList">DataOciOsManagementHubManagedInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceCollection">managed_instance_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryNameInput">advisory_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archTypeInput">arch_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameInput">display_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualToInput">group_not_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStageInput">is_attached_to_group_or_lifecycle_stage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinuxInput">is_managed_by_autonomous_linux_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStationInput">is_management_station_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttachedInput">is_profile_attached_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentInput">lifecycle_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualToInput">lifecycle_environment_not_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageInput">lifecycle_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualToInput">lifecycle_stage_not_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationInput">location_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualToInput">location_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamilyInput">os_family_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileInput">profile_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualToInput">profile_not_equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualTo">group_not_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStage">is_attached_to_group_or_lifecycle_stage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStation">is_management_station</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttached">is_profile_attached</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironment">lifecycle_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualTo">lifecycle_environment_not_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualTo">lifecycle_stage_not_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.location">location</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profile">profile</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualTo">profile_not_equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList">DataOciOsManagementHubManagedInstancesFilterList</a>

---

##### `managed_instance_collection`<sup>Required</sup> <a name="managed_instance_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceCollection"></a>

```python
managed_instance_collection: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList</a>

---

##### `advisory_name_input`<sup>Optional</sup> <a name="advisory_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryNameInput"></a>

```python
advisory_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arch_type_input`<sup>Optional</sup> <a name="arch_type_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archTypeInput"></a>

```python
arch_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameInput"></a>

```python
display_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `group_not_equal_to_input`<sup>Optional</sup> <a name="group_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualToInput"></a>

```python
group_not_equal_to_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_attached_to_group_or_lifecycle_stage_input`<sup>Optional</sup> <a name="is_attached_to_group_or_lifecycle_stage_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStageInput"></a>

```python
is_attached_to_group_or_lifecycle_stage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_managed_by_autonomous_linux_input`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinuxInput"></a>

```python
is_managed_by_autonomous_linux_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_management_station_input`<sup>Optional</sup> <a name="is_management_station_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStationInput"></a>

```python
is_management_station_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_profile_attached_input`<sup>Optional</sup> <a name="is_profile_attached_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttachedInput"></a>

```python
is_profile_attached_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_environment_input`<sup>Optional</sup> <a name="lifecycle_environment_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentInput"></a>

```python
lifecycle_environment_input: str
```

- *Type:* str

---

##### `lifecycle_environment_not_equal_to_input`<sup>Optional</sup> <a name="lifecycle_environment_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualToInput"></a>

```python
lifecycle_environment_not_equal_to_input: str
```

- *Type:* str

---

##### `lifecycle_stage_input`<sup>Optional</sup> <a name="lifecycle_stage_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageInput"></a>

```python
lifecycle_stage_input: str
```

- *Type:* str

---

##### `lifecycle_stage_not_equal_to_input`<sup>Optional</sup> <a name="lifecycle_stage_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualToInput"></a>

```python
lifecycle_stage_not_equal_to_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationInput"></a>

```python
location_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to_input`<sup>Optional</sup> <a name="location_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualToInput"></a>

```python
location_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `os_family_input`<sup>Optional</sup> <a name="os_family_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamilyInput"></a>

```python
os_family_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileInput"></a>

```python
profile_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile_not_equal_to_input`<sup>Optional</sup> <a name="profile_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualToInput"></a>

```python
profile_not_equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advisory_name`<sup>Required</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryName"></a>

```python
advisory_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `group_not_equal_to`<sup>Required</sup> <a name="group_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualTo"></a>

```python
group_not_equal_to: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_attached_to_group_or_lifecycle_stage`<sup>Required</sup> <a name="is_attached_to_group_or_lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStage"></a>

```python
is_attached_to_group_or_lifecycle_stage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_management_station`<sup>Required</sup> <a name="is_management_station" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStation"></a>

```python
is_management_station: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_profile_attached`<sup>Required</sup> <a name="is_profile_attached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttached"></a>

```python
is_profile_attached: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_environment`<sup>Required</sup> <a name="lifecycle_environment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironment"></a>

```python
lifecycle_environment: str
```

- *Type:* str

---

##### `lifecycle_environment_not_equal_to`<sup>Required</sup> <a name="lifecycle_environment_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualTo"></a>

```python
lifecycle_environment_not_equal_to: str
```

- *Type:* str

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

---

##### `lifecycle_stage_not_equal_to`<sup>Required</sup> <a name="lifecycle_stage_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualTo"></a>

```python
lifecycle_stage_not_equal_to: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_not_equal_to`<sup>Required</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profile"></a>

```python
profile: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile_not_equal_to`<sup>Required</sup> <a name="profile_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualTo"></a>

```python
profile_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstancesConfig <a name="DataOciOsManagementHubManagedInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  advisory_name: typing.List[str] = None,
  arch_type: typing.List[str] = None,
  compartment_id: str = None,
  display_name: typing.List[str] = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]] = None,
  group: str = None,
  group_not_equal_to: str = None,
  id: str = None,
  is_attached_to_group_or_lifecycle_stage: typing.Union[bool, IResolvable] = None,
  is_managed_by_autonomous_linux: typing.Union[bool, IResolvable] = None,
  is_management_station: typing.Union[bool, IResolvable] = None,
  is_profile_attached: typing.Union[bool, IResolvable] = None,
  lifecycle_environment: str = None,
  lifecycle_environment_not_equal_to: str = None,
  lifecycle_stage: str = None,
  lifecycle_stage_not_equal_to: str = None,
  location: typing.List[str] = None,
  location_not_equal_to: typing.List[str] = None,
  managed_instance_id: str = None,
  os_family: typing.List[str] = None,
  profile: typing.List[str] = None,
  profile_not_equal_to: typing.List[str] = None,
  software_source_id: str = None,
  status: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.advisoryName">advisory_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.archType">arch_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayName">display_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.groupNotEqualTo">group_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isAttachedToGroupOrLifecycleStage">is_attached_to_group_or_lifecycle_stage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagementStation">is_management_station</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isProfileAttached">is_profile_attached</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironment">lifecycle_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironmentNotEqualTo">lifecycle_environment_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStageNotEqualTo">lifecycle_stage_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.location">location</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.locationNotEqualTo">location_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.osFamily">os_family</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profile">profile</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profileNotEqualTo">profile_not_equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advisory_name`<sup>Optional</sup> <a name="advisory_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.advisoryName"></a>

```python
advisory_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}.

---

##### `arch_type`<sup>Optional</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.archType"></a>

```python
arch_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayName"></a>

```python
display_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#filter DataOciOsManagementHubManagedInstances#filter}

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}.

---

##### `group_not_equal_to`<sup>Optional</sup> <a name="group_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.groupNotEqualTo"></a>

```python
group_not_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_attached_to_group_or_lifecycle_stage`<sup>Optional</sup> <a name="is_attached_to_group_or_lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isAttachedToGroupOrLifecycleStage"></a>

```python
is_attached_to_group_or_lifecycle_stage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}.

---

##### `is_managed_by_autonomous_linux`<sup>Optional</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}.

---

##### `is_management_station`<sup>Optional</sup> <a name="is_management_station" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagementStation"></a>

```python
is_management_station: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}.

---

##### `is_profile_attached`<sup>Optional</sup> <a name="is_profile_attached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isProfileAttached"></a>

```python
is_profile_attached: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}.

---

##### `lifecycle_environment`<sup>Optional</sup> <a name="lifecycle_environment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironment"></a>

```python
lifecycle_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}.

---

##### `lifecycle_environment_not_equal_to`<sup>Optional</sup> <a name="lifecycle_environment_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironmentNotEqualTo"></a>

```python
lifecycle_environment_not_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}.

---

##### `lifecycle_stage_not_equal_to`<sup>Optional</sup> <a name="lifecycle_stage_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStageNotEqualTo"></a>

```python
lifecycle_stage_not_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.location"></a>

```python
location: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}.

---

##### `location_not_equal_to`<sup>Optional</sup> <a name="location_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.locationNotEqualTo"></a>

```python
location_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}.

---

##### `os_family`<sup>Optional</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.osFamily"></a>

```python
os_family: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profile"></a>

```python
profile: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}.

---

##### `profile_not_equal_to`<sup>Optional</sup> <a name="profile_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profileNotEqualTo"></a>

```python
profile_not_equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}.

---

### DataOciOsManagementHubManagedInstancesFilter <a name="DataOciOsManagementHubManagedInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#name DataOciOsManagementHubManagedInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#values DataOciOsManagementHubManagedInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#regex DataOciOsManagementHubManagedInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#name DataOciOsManagementHubManagedInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#values DataOciOsManagementHubManagedInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#regex DataOciOsManagementHubManagedInstances#regex}.

---

### DataOciOsManagementHubManagedInstancesManagedInstanceCollection <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup()
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstancesFilterList <a name="DataOciOsManagementHubManagedInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]]

---


### DataOciOsManagementHubManagedInstancesFilterOutputReference <a name="DataOciOsManagementHubManagedInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>]

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId">scheduled_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_data_collection_authorized`<sup>Required</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_job_id`<sup>Required</sup> <a name="scheduled_job_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```python
scheduled_job_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.autonomousSettings">autonomous_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.bugUpdatesAvailable">bug_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.enhancementUpdatesAvailable">enhancement_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedPackages">installed_packages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedWindowsUpdates">installed_windows_updates</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagementStation">is_management_station</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.kspliceEffectiveKernelVersion">ksplice_effective_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleEnvironment">lifecycle_environment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleStage">lifecycle_stage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceGroup">managed_instance_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osKernelVersion">os_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.otherUpdatesAvailable">other_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.primaryManagementStationId">primary_management_station_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.scheduledJobCount">scheduled_job_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.secondaryManagementStationId">secondary_management_station_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.securityUpdatesAvailable">security_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastBoot">time_last_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastCheckin">time_last_checkin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.updatesAvailable">updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.workRequestCount">work_request_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `autonomous_settings`<sup>Required</sup> <a name="autonomous_settings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.autonomousSettings"></a>

```python
autonomous_settings: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList</a>

---

##### `bug_updates_available`<sup>Required</sup> <a name="bug_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.bugUpdatesAvailable"></a>

```python
bug_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enhancement_updates_available`<sup>Required</sup> <a name="enhancement_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.enhancementUpdatesAvailable"></a>

```python
enhancement_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installed_packages`<sup>Required</sup> <a name="installed_packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedPackages"></a>

```python
installed_packages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `installed_windows_updates`<sup>Required</sup> <a name="installed_windows_updates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedWindowsUpdates"></a>

```python
installed_windows_updates: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_management_station`<sup>Required</sup> <a name="is_management_station" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagementStation"></a>

```python
is_management_station: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ksplice_effective_kernel_version`<sup>Required</sup> <a name="ksplice_effective_kernel_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.kspliceEffectiveKernelVersion"></a>

```python
ksplice_effective_kernel_version: str
```

- *Type:* str

---

##### `lifecycle_environment`<sup>Required</sup> <a name="lifecycle_environment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleEnvironment"></a>

```python
lifecycle_environment: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList</a>

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleStage"></a>

```python
lifecycle_stage: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_instance_group`<sup>Required</sup> <a name="managed_instance_group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceGroup"></a>

```python
managed_instance_group: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList</a>

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `os_kernel_version`<sup>Required</sup> <a name="os_kernel_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osKernelVersion"></a>

```python
os_kernel_version: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `other_updates_available`<sup>Required</sup> <a name="other_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.otherUpdatesAvailable"></a>

```python
other_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_management_station_id`<sup>Required</sup> <a name="primary_management_station_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.primaryManagementStationId"></a>

```python
primary_management_station_id: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `scheduled_job_count`<sup>Required</sup> <a name="scheduled_job_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.scheduledJobCount"></a>

```python
scheduled_job_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_management_station_id`<sup>Required</sup> <a name="secondary_management_station_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.secondaryManagementStationId"></a>

```python
secondary_management_station_id: str
```

- *Type:* str

---

##### `security_updates_available`<sup>Required</sup> <a name="security_updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.securityUpdatesAvailable"></a>

```python
security_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_boot`<sup>Required</sup> <a name="time_last_boot" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastBoot"></a>

```python
time_last_boot: str
```

- *Type:* str

---

##### `time_last_checkin`<sup>Required</sup> <a name="time_last_checkin" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastCheckin"></a>

```python
time_last_checkin: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updates_available`<sup>Required</sup> <a name="updates_available" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.updatesAvailable"></a>

```python
updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_count`<sup>Required</sup> <a name="work_request_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.workRequestCount"></a>

```python
work_request_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instances

dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection">DataOciOsManagementHubManagedInstancesManagedInstanceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstancesManagedInstanceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection">DataOciOsManagementHubManagedInstancesManagedInstanceCollection</a>

---



