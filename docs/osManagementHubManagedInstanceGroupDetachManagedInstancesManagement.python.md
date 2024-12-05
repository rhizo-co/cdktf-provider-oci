# `osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupDetachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management oci_os_management_hub_managed_instance_group_detach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement(
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
  timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.managedInstances"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput">managed_instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `managed_instances_input`<sup>Optional</sup> <a name="managed_instances_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstancesInput"></a>

```python
managed_instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig(
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
  timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instance_group_id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instance_group_id}.

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#managed_instances OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#managed_instances}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#id OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#timeouts OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#timeouts}

---

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#create OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#delete OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_detach_managed_instances_management#update OsManagementHubManagedInstanceGroupDetachManagedInstancesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_group_detach_managed_instances_management

osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupDetachManagedInstancesManagement.OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts">OsManagementHubManagedInstanceGroupDetachManagedInstancesManagementTimeouts</a>]

---


