# `osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule <a name="`osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagement <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management oci_os_management_hub_software_source_change_availability_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_availabilities: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]],
  id: str = None,
  timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.softwareSourceAvailabilities">software_source_availabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]</code> | software_source_availabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_availabilities`<sup>Required</sup> <a name="software_source_availabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.softwareSourceAvailabilities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]

software_source_availabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_availabilities OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_availabilities}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities">put_software_source_availabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_software_source_availabilities` <a name="put_software_source_availabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities"></a>

```python
def put_software_source_availabilities(
  value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubSoftwareSourceChangeAvailabilityManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities">software_source_availabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput">software_source_availabilities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_availabilities`<sup>Required</sup> <a name="software_source_availabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities"></a>

```python
software_source_availabilities: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts"></a>

```python
timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `software_source_availabilities_input`<sup>Optional</sup> <a name="software_source_availabilities_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput"></a>

```python
software_source_availabilities_input: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_availabilities: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]],
  id: str = None,
  timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities">software_source_availabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]</code> | software_source_availabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_availabilities`<sup>Required</sup> <a name="software_source_availabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities"></a>

```python
software_source_availabilities: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]

software_source_availabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_availabilities OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_availabilities}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagement#timeouts}

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities(
  software_source_id: str,
  availability: str = None,
  availability_at_oci: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}. |

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}.

---

##### `availability_at_oci`<sup>Optional</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}.

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]]

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci">reset_availability_at_oci</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_availability_at_oci` <a name="reset_availability_at_oci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci"></a>

```python
def reset_availability_at_oci() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput">availability_at_oci_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_at_oci_input`<sup>Optional</sup> <a name="availability_at_oci_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput"></a>

```python
availability_at_oci_input: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>]

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_software_source_change_availability_management

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>]

---



