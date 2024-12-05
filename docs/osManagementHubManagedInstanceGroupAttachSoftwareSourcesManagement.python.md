# `osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management oci_os_management_hub_managed_instance_group_attach_software_sources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  software_sources: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.softwareSources">software_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.softwareSources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#create OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#delete OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#update OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#update}.

---

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#description OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#display_name OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#display_name}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSourcesInput">software_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSources">software_sources</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference</a>

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `software_sources_input`<sup>Optional</sup> <a name="software_sources_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSourcesInput"></a>

```python
software_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.softwareSources"></a>

```python
software_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  software_sources: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.softwareSources">software_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#managed_instance_group_id}.

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.softwareSources"></a>

```python
software_sources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#software_sources OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#software_sources}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#id OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#timeouts OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementConfig.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#work_request_details OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#create OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#delete OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#update OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#create OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#delete OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#update OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#update}.

---

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#description OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#display_name OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#description OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_software_sources_management#display_name OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementTimeouts</a>]

---


### OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_software_sources_management

osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachSoftwareSourcesManagement.OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachSoftwareSourcesManagementWorkRequestDetails</a>

---



