# `osManagementHubManagedInstanceUpdatePackagesManagement` Submodule <a name="`osManagementHubManagedInstanceUpdatePackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagement <a name="OsManagementHubManagedInstanceUpdatePackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management oci_os_management_hub_managed_instance_update_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  id: str = None,
  package_names: typing.List[str] = None,
  timeouts: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts = None,
  update_types: typing.List[str] = None,
  work_request_details: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.packageNames">package_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.updateTypes">update_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_names`<sup>Optional</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.packageNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#timeouts OsManagementHubManagedInstanceUpdatePackagesManagement#timeouts}

---

##### `update_types`<sup>Optional</sup> <a name="update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.updateTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}.

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.workRequestDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#work_request_details OsManagementHubManagedInstanceUpdatePackagesManagement#work_request_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails">put_work_request_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames">reset_package_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes">reset_update_types</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails">reset_work_request_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}.

---

##### `put_work_request_details` <a name="put_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails"></a>

```python
def put_work_request_details(
  description: str = None,
  display_name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_package_names` <a name="reset_package_names" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames"></a>

```python
def reset_package_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_types` <a name="reset_update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes"></a>

```python
def reset_update_types() -> None
```

##### `reset_work_request_details` <a name="reset_work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails"></a>

```python
def reset_work_request_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstanceUpdatePackagesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstanceUpdatePackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceUpdatePackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput">package_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput">update_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput">work_request_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames">package_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes">update_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a>

---

##### `work_request_details`<sup>Required</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `package_names_input`<sup>Optional</sup> <a name="package_names_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput"></a>

```python
package_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>]

---

##### `update_types_input`<sup>Optional</sup> <a name="update_types_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput"></a>

```python
update_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `work_request_details_input`<sup>Optional</sup> <a name="work_request_details_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput"></a>

```python
work_request_details_input: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `package_names`<sup>Required</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames"></a>

```python
package_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_types`<sup>Required</sup> <a name="update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes"></a>

```python
update_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementConfig <a name="OsManagementHubManagedInstanceUpdatePackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  id: str = None,
  package_names: typing.List[str] = None,
  timeouts: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts = None,
  update_types: typing.List[str] = None,
  work_request_details: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames">package_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes">update_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails">work_request_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_names`<sup>Optional</sup> <a name="package_names" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames"></a>

```python
package_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#timeouts OsManagementHubManagedInstanceUpdatePackagesManagement#timeouts}

---

##### `update_types`<sup>Optional</sup> <a name="update_types" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes"></a>

```python
update_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}.

---

##### `work_request_details`<sup>Optional</sup> <a name="work_request_details" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails"></a>

```python
work_request_details: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#work_request_details OsManagementHubManagedInstanceUpdatePackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}.

---

### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails(
  description: str = None,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>]

---


### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance_update_packages_management

osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---



