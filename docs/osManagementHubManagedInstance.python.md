# `osManagementHubManagedInstance` Submodule <a name="`osManagementHubManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstance <a name="OsManagementHubManagedInstance" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance oci_os_management_hub_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstance(
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
  autonomous_settings: OsManagementHubManagedInstanceAutonomousSettings = None,
  description: str = None,
  id: str = None,
  notification_topic_id: str = None,
  primary_management_station_id: str = None,
  secondary_management_station_id: str = None,
  timeouts: OsManagementHubManagedInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#managed_instance_id OsManagementHubManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.autonomousSettings">autonomous_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a></code> | autonomous_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#description OsManagementHubManagedInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#id OsManagementHubManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#notification_topic_id OsManagementHubManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.primaryManagementStationId">primary_management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#primary_management_station_id OsManagementHubManagedInstance#primary_management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.secondaryManagementStationId">secondary_management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#secondary_management_station_id OsManagementHubManagedInstance#secondary_management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#managed_instance_id OsManagementHubManagedInstance#managed_instance_id}.

---

##### `autonomous_settings`<sup>Optional</sup> <a name="autonomous_settings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.autonomousSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a>

autonomous_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#autonomous_settings OsManagementHubManagedInstance#autonomous_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#description OsManagementHubManagedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#id OsManagementHubManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_topic_id`<sup>Optional</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.notificationTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#notification_topic_id OsManagementHubManagedInstance#notification_topic_id}.

---

##### `primary_management_station_id`<sup>Optional</sup> <a name="primary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.primaryManagementStationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#primary_management_station_id OsManagementHubManagedInstance#primary_management_station_id}.

---

##### `secondary_management_station_id`<sup>Optional</sup> <a name="secondary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.secondaryManagementStationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#secondary_management_station_id OsManagementHubManagedInstance#secondary_management_station_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#timeouts OsManagementHubManagedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putAutonomousSettings">put_autonomous_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetAutonomousSettings">reset_autonomous_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetNotificationTopicId">reset_notification_topic_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetPrimaryManagementStationId">reset_primary_management_station_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetSecondaryManagementStationId">reset_secondary_management_station_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autonomous_settings` <a name="put_autonomous_settings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putAutonomousSettings"></a>

```python
def put_autonomous_settings(
  is_data_collection_authorized: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_data_collection_authorized`<sup>Optional</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putAutonomousSettings.parameter.isDataCollectionAuthorized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#is_data_collection_authorized OsManagementHubManagedInstance#is_data_collection_authorized}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#create OsManagementHubManagedInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#delete OsManagementHubManagedInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#update OsManagementHubManagedInstance#update}.

---

##### `reset_autonomous_settings` <a name="reset_autonomous_settings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetAutonomousSettings"></a>

```python
def reset_autonomous_settings() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_topic_id` <a name="reset_notification_topic_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetNotificationTopicId"></a>

```python
def reset_notification_topic_id() -> None
```

##### `reset_primary_management_station_id` <a name="reset_primary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetPrimaryManagementStationId"></a>

```python
def reset_primary_management_station_id() -> None
```

##### `reset_secondary_management_station_id` <a name="reset_secondary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetSecondaryManagementStationId"></a>

```python
def reset_secondary_management_station_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsManagementHubManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsManagementHubManagedInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsManagementHubManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.autonomousSettings">autonomous_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference">OsManagementHubManagedInstanceAutonomousSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.bugUpdatesAvailable">bug_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.enhancementUpdatesAvailable">enhancement_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.installedPackages">installed_packages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.installedWindowsUpdates">installed_windows_updates</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isManagedByAutonomousLinux">is_managed_by_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isManagementStation">is_management_station</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.kspliceEffectiveKernelVersion">ksplice_effective_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycleEnvironment">lifecycle_environment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList">OsManagementHubManagedInstanceLifecycleEnvironmentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycleStage">lifecycle_stage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList">OsManagementHubManagedInstanceLifecycleStageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceGroup">managed_instance_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList">OsManagementHubManagedInstanceManagedInstanceGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osKernelVersion">os_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.otherUpdatesAvailable">other_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.scheduledJobCount">scheduled_job_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.securityUpdatesAvailable">security_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList">OsManagementHubManagedInstanceSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeLastBoot">time_last_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeLastCheckin">time_last_checkin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference">OsManagementHubManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.updatesAvailable">updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.workRequestCount">work_request_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.autonomousSettingsInput">autonomous_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.notificationTopicIdInput">notification_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.primaryManagementStationIdInput">primary_management_station_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.secondaryManagementStationIdInput">secondary_management_station_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.primaryManagementStationId">primary_management_station_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.secondaryManagementStationId">secondary_management_station_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `autonomous_settings`<sup>Required</sup> <a name="autonomous_settings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.autonomousSettings"></a>

```python
autonomous_settings: OsManagementHubManagedInstanceAutonomousSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference">OsManagementHubManagedInstanceAutonomousSettingsOutputReference</a>

---

##### `bug_updates_available`<sup>Required</sup> <a name="bug_updates_available" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.bugUpdatesAvailable"></a>

```python
bug_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enhancement_updates_available`<sup>Required</sup> <a name="enhancement_updates_available" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.enhancementUpdatesAvailable"></a>

```python
enhancement_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `installed_packages`<sup>Required</sup> <a name="installed_packages" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.installedPackages"></a>

```python
installed_packages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `installed_windows_updates`<sup>Required</sup> <a name="installed_windows_updates" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.installedWindowsUpdates"></a>

```python
installed_windows_updates: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_managed_by_autonomous_linux`<sup>Required</sup> <a name="is_managed_by_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isManagedByAutonomousLinux"></a>

```python
is_managed_by_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_management_station`<sup>Required</sup> <a name="is_management_station" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isManagementStation"></a>

```python
is_management_station: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ksplice_effective_kernel_version`<sup>Required</sup> <a name="ksplice_effective_kernel_version" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```python
ksplice_effective_kernel_version: str
```

- *Type:* str

---

##### `lifecycle_environment`<sup>Required</sup> <a name="lifecycle_environment" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycleEnvironment"></a>

```python
lifecycle_environment: OsManagementHubManagedInstanceLifecycleEnvironmentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList">OsManagementHubManagedInstanceLifecycleEnvironmentList</a>

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.lifecycleStage"></a>

```python
lifecycle_stage: OsManagementHubManagedInstanceLifecycleStageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList">OsManagementHubManagedInstanceLifecycleStageList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_instance_group`<sup>Required</sup> <a name="managed_instance_group" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceGroup"></a>

```python
managed_instance_group: OsManagementHubManagedInstanceManagedInstanceGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList">OsManagementHubManagedInstanceManagedInstanceGroupList</a>

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `os_kernel_version`<sup>Required</sup> <a name="os_kernel_version" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osKernelVersion"></a>

```python
os_kernel_version: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `other_updates_available`<sup>Required</sup> <a name="other_updates_available" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.otherUpdatesAvailable"></a>

```python
other_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `scheduled_job_count`<sup>Required</sup> <a name="scheduled_job_count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.scheduledJobCount"></a>

```python
scheduled_job_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_updates_available`<sup>Required</sup> <a name="security_updates_available" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.securityUpdatesAvailable"></a>

```python
security_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.softwareSources"></a>

```python
software_sources: OsManagementHubManagedInstanceSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList">OsManagementHubManagedInstanceSoftwareSourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_boot`<sup>Required</sup> <a name="time_last_boot" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeLastBoot"></a>

```python
time_last_boot: str
```

- *Type:* str

---

##### `time_last_checkin`<sup>Required</sup> <a name="time_last_checkin" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeLastCheckin"></a>

```python
time_last_checkin: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference">OsManagementHubManagedInstanceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updates_available`<sup>Required</sup> <a name="updates_available" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.updatesAvailable"></a>

```python
updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_count`<sup>Required</sup> <a name="work_request_count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.workRequestCount"></a>

```python
work_request_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autonomous_settings_input`<sup>Optional</sup> <a name="autonomous_settings_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.autonomousSettingsInput"></a>

```python
autonomous_settings_input: OsManagementHubManagedInstanceAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `notification_topic_id_input`<sup>Optional</sup> <a name="notification_topic_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.notificationTopicIdInput"></a>

```python
notification_topic_id_input: str
```

- *Type:* str

---

##### `primary_management_station_id_input`<sup>Optional</sup> <a name="primary_management_station_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.primaryManagementStationIdInput"></a>

```python
primary_management_station_id_input: str
```

- *Type:* str

---

##### `secondary_management_station_id_input`<sup>Optional</sup> <a name="secondary_management_station_id_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.secondaryManagementStationIdInput"></a>

```python
secondary_management_station_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsManagementHubManagedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `primary_management_station_id`<sup>Required</sup> <a name="primary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.primaryManagementStationId"></a>

```python
primary_management_station_id: str
```

- *Type:* str

---

##### `secondary_management_station_id`<sup>Required</sup> <a name="secondary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.secondaryManagementStationId"></a>

```python
secondary_management_station_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceAutonomousSettings <a name="OsManagementHubManagedInstanceAutonomousSettings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings(
  is_data_collection_authorized: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#is_data_collection_authorized OsManagementHubManagedInstance#is_data_collection_authorized}. |

---

##### `is_data_collection_authorized`<sup>Optional</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#is_data_collection_authorized OsManagementHubManagedInstance#is_data_collection_authorized}.

---

### OsManagementHubManagedInstanceConfig <a name="OsManagementHubManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  autonomous_settings: OsManagementHubManagedInstanceAutonomousSettings = None,
  description: str = None,
  id: str = None,
  notification_topic_id: str = None,
  primary_management_station_id: str = None,
  secondary_management_station_id: str = None,
  timeouts: OsManagementHubManagedInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#managed_instance_id OsManagementHubManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.autonomousSettings">autonomous_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a></code> | autonomous_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#description OsManagementHubManagedInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#id OsManagementHubManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#notification_topic_id OsManagementHubManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.primaryManagementStationId">primary_management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#primary_management_station_id OsManagementHubManagedInstance#primary_management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.secondaryManagementStationId">secondary_management_station_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#secondary_management_station_id OsManagementHubManagedInstance#secondary_management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#managed_instance_id OsManagementHubManagedInstance#managed_instance_id}.

---

##### `autonomous_settings`<sup>Optional</sup> <a name="autonomous_settings" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.autonomousSettings"></a>

```python
autonomous_settings: OsManagementHubManagedInstanceAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a>

autonomous_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#autonomous_settings OsManagementHubManagedInstance#autonomous_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#description OsManagementHubManagedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#id OsManagementHubManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_topic_id`<sup>Optional</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#notification_topic_id OsManagementHubManagedInstance#notification_topic_id}.

---

##### `primary_management_station_id`<sup>Optional</sup> <a name="primary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.primaryManagementStationId"></a>

```python
primary_management_station_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#primary_management_station_id OsManagementHubManagedInstance#primary_management_station_id}.

---

##### `secondary_management_station_id`<sup>Optional</sup> <a name="secondary_management_station_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.secondaryManagementStationId"></a>

```python
secondary_management_station_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#secondary_management_station_id OsManagementHubManagedInstance#secondary_management_station_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceConfig.property.timeouts"></a>

```python
timeouts: OsManagementHubManagedInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#timeouts OsManagementHubManagedInstance#timeouts}

---

### OsManagementHubManagedInstanceLifecycleEnvironment <a name="OsManagementHubManagedInstanceLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironment()
```


### OsManagementHubManagedInstanceLifecycleStage <a name="OsManagementHubManagedInstanceLifecycleStage" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStage()
```


### OsManagementHubManagedInstanceManagedInstanceGroup <a name="OsManagementHubManagedInstanceManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroup()
```


### OsManagementHubManagedInstanceSoftwareSources <a name="OsManagementHubManagedInstanceSoftwareSources" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSources()
```


### OsManagementHubManagedInstanceTimeouts <a name="OsManagementHubManagedInstanceTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#create OsManagementHubManagedInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#delete OsManagementHubManagedInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#update OsManagementHubManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#create OsManagementHubManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#delete OsManagementHubManagedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance#update OsManagementHubManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceAutonomousSettingsOutputReference <a name="OsManagementHubManagedInstanceAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.resetIsDataCollectionAuthorized">reset_is_data_collection_authorized</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_data_collection_authorized` <a name="reset_is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.resetIsDataCollectionAuthorized"></a>

```python
def reset_is_data_collection_authorized() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.scheduledJobId">scheduled_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.isDataCollectionAuthorizedInput">is_data_collection_authorized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheduled_job_id`<sup>Required</sup> <a name="scheduled_job_id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```python
scheduled_job_id: str
```

- *Type:* str

---

##### `is_data_collection_authorized_input`<sup>Optional</sup> <a name="is_data_collection_authorized_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.isDataCollectionAuthorizedInput"></a>

```python
is_data_collection_authorized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_data_collection_authorized`<sup>Required</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettingsOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceAutonomousSettings">OsManagementHubManagedInstanceAutonomousSettings</a>

---


### OsManagementHubManagedInstanceLifecycleEnvironmentList <a name="OsManagementHubManagedInstanceLifecycleEnvironmentList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference <a name="OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironment">OsManagementHubManagedInstanceLifecycleEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceLifecycleEnvironment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleEnvironment">OsManagementHubManagedInstanceLifecycleEnvironment</a>

---


### OsManagementHubManagedInstanceLifecycleStageList <a name="OsManagementHubManagedInstanceLifecycleStageList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagedInstanceLifecycleStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagedInstanceLifecycleStageOutputReference <a name="OsManagementHubManagedInstanceLifecycleStageOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStage">OsManagementHubManagedInstanceLifecycleStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStageOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceLifecycleStage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceLifecycleStage">OsManagementHubManagedInstanceLifecycleStage</a>

---


### OsManagementHubManagedInstanceManagedInstanceGroupList <a name="OsManagementHubManagedInstanceManagedInstanceGroupList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagedInstanceManagedInstanceGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagedInstanceManagedInstanceGroupOutputReference <a name="OsManagementHubManagedInstanceManagedInstanceGroupOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroup">OsManagementHubManagedInstanceManagedInstanceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroupOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceManagedInstanceGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceManagedInstanceGroup">OsManagementHubManagedInstanceManagedInstanceGroup</a>

---


### OsManagementHubManagedInstanceSoftwareSourcesList <a name="OsManagementHubManagedInstanceSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsManagementHubManagedInstanceSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsManagementHubManagedInstanceSoftwareSourcesOutputReference <a name="OsManagementHubManagedInstanceSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSources">OsManagementHubManagedInstanceSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: OsManagementHubManagedInstanceSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceSoftwareSources">OsManagementHubManagedInstanceSoftwareSources</a>

---


### OsManagementHubManagedInstanceTimeoutsOutputReference <a name="OsManagementHubManagedInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import os_management_hub_managed_instance

osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsManagementHubManagedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstance.OsManagementHubManagedInstanceTimeouts">OsManagementHubManagedInstanceTimeouts</a>]

---



