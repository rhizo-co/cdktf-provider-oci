# `osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupAttachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management oci_os_management_hub_managed_instance_group_attach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement(
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
  managed_instances: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.managedInstances"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#work_request_details OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}.

---

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput">managed_instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `managed_instances_input`<sup>Optional</sup> <a name="managed_instances_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstancesInput"></a>

```python
managed_instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  managed_instances: typing.List[str],
  id: str = None,
  timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts = None,
  work_request_details: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#id OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementConfig.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#work_request_details OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#create OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#delete OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#update OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#update}.

---

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#description OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_attach_managed_instances_management#display_name OsManagementHubManagedInstanceGroupAttachManagedInstancesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementTimeouts</a>]

---


### OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_attach_managed_instances_management

osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupAttachManagedInstancesManagement.OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupAttachManagedInstancesManagementWorkRequestDetails</a>

---



