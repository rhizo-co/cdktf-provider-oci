# `osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule <a name="`osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagement <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management oci_os_management_hub_lifecycle_stage_promote_software_source_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement(
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
  software_source_id: str = None,
  timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts = None,
  work_request_details: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.lifecycleStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#timeouts OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#work_request_details OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId">reset_software_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}.

---

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_software_source_id` <a name="reset_software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId"></a>

```python
def reset_software_source_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubLifecycleStagePromoteSoftwareSourceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput">lifecycle_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a>

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_stage_id_input`<sup>Optional</sup> <a name="lifecycle_stage_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput"></a>

```python
lifecycle_stage_id_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lifecycle_stage_id: str,
  id: str = None,
  software_source_id: str = None,
  timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts = None,
  work_request_details: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId">lifecycle_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_stage_id`<sup>Required</sup> <a name="lifecycle_stage_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId"></a>

```python
lifecycle_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `software_source_id`<sup>Optional</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#timeouts OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#timeouts}

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#work_request_details OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#work_request_details}

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}.

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>]

---


### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_lifecycle_stage_promote_software_source_management

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---



