# `osManagementHubLifecycleStageAttachManagedInstancesManagement` Submodule <a name="`osManagementHubLifecycleStageAttachManagedInstancesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagement <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management oci_os_management_hub_lifecycle_stage_attach_managed_instances_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lifecycle_stage_id: str,
  id: str = None,
  managed_instance_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails = None,
  timeouts: OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.managedInstanceDetails">managed_instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | managed_instance_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.lifecycleStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_details`<sup>Optional</sup> <a name="managed_instance_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.managedInstanceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

managed_instance_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instance_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instance_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#timeouts OsManagementHubLifecycleStageAttachManagedInstancesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails">put_managed_instance_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetManagedInstanceDetails">reset_managed_instance_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_managed_instance_details` <a name="put_managed_instance_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails"></a>

```python
def put_managed_instance_details(
  managed_instances: typing.List[str],
  work_request_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails = None
) -> None
```

###### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails.parameter.managedInstances"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instances OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instances}.

---

###### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putManagedInstanceDetails.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#work_request_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#work_request_details}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#create OsManagementHubLifecycleStageAttachManagedInstancesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#delete OsManagementHubLifecycleStageAttachManagedInstancesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#update OsManagementHubLifecycleStageAttachManagedInstancesManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_instance_details` <a name="reset_managed_instance_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetManagedInstanceDetails"></a>

```python
def reset_managed_instance_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleStageAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubLifecycleStageAttachManagedInstancesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubLifecycleStageAttachManagedInstancesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubLifecycleStageAttachManagedInstancesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleStageAttachManagedInstancesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetails">managed_instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageIdInput">lifecycle_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetailsInput">managed_instance_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_details`<sup>Required</sup> <a name="managed_instance_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetails"></a>

```python
managed_instance_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_stage_id_input`<sup>Optional</sup> <a name="lifecycle_stage_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageIdInput"></a>

```python
lifecycle_stage_id_input: str
```

- *Type:* str

---

##### `managed_instance_details_input`<sup>Optional</sup> <a name="managed_instance_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.managedInstanceDetailsInput"></a>

```python
managed_instance_details_input: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lifecycle_stage_id: str,
  id: str = None,
  managed_instance_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails = None,
  timeouts: OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.managedInstanceDetails">managed_instance_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | managed_instance_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#lifecycle_stage_id OsManagementHubLifecycleStageAttachManagedInstancesManagement#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#id OsManagementHubLifecycleStageAttachManagedInstancesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_details`<sup>Optional</sup> <a name="managed_instance_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.managedInstanceDetails"></a>

```python
managed_instance_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

managed_instance_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instance_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instance_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#timeouts OsManagementHubLifecycleStageAttachManagedInstancesManagement#timeouts}

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails(
  managed_instances: typing.List[str],
  work_request_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instances OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | work_request_details block. |

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#managed_instances OsManagementHubLifecycleStageAttachManagedInstancesManagement#managed_instances}.

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#work_request_details OsManagementHubLifecycleStageAttachManagedInstancesManagement#work_request_details}

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#description OsManagementHubLifecycleStageAttachManagedInstancesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#display_name OsManagementHubLifecycleStageAttachManagedInstancesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#description OsManagementHubLifecycleStageAttachManagedInstancesManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#display_name OsManagementHubLifecycleStageAttachManagedInstancesManagement#display_name}.

---

### OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#create OsManagementHubLifecycleStageAttachManagedInstancesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#delete OsManagementHubLifecycleStageAttachManagedInstancesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#update OsManagementHubLifecycleStageAttachManagedInstancesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#create OsManagementHubLifecycleStageAttachManagedInstancesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#delete OsManagementHubLifecycleStageAttachManagedInstancesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#update OsManagementHubLifecycleStageAttachManagedInstancesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#description OsManagementHubLifecycleStageAttachManagedInstancesManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_attach_managed_instances_management#display_name OsManagementHubLifecycleStageAttachManagedInstancesManagement#display_name}.

---

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstancesInput">managed_instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstances">managed_instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference</a>

---

##### `managed_instances_input`<sup>Optional</sup> <a name="managed_instances_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstancesInput"></a>

```python
managed_instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.managedInstances"></a>

```python
managed_instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetails</a>

---


### OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails">OsManagementHubLifecycleStageAttachManagedInstancesManagementManagedInstanceDetailsWorkRequestDetails</a>

---


### OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference <a name="OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_attach_managed_instances_management

osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStageAttachManagedInstancesManagement.OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts">OsManagementHubLifecycleStageAttachManagedInstancesManagementTimeouts</a>]

---



