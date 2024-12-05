# `osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management oci_os_management_hub_managed_instance_group_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement(
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
  windows_update_types: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.windowsUpdateTypes">windows_update_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}.

---

##### `windows_update_types`<sup>Required</sup> <a name="windows_update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.windowsUpdateTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#timeouts OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}.

---

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">windows_update_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes">windows_update_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>]

---

##### `windows_update_types_input`<sup>Optional</sup> <a name="windows_update_types_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```python
windows_update_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `windows_update_types`<sup>Required</sup> <a name="windows_update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```python
windows_update_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  windows_update_types: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">windows_update_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}.

---

##### `windows_update_types`<sup>Required</sup> <a name="windows_update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```python
windows_update_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#timeouts OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>]

---


### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_install_windows_updates_management

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---



