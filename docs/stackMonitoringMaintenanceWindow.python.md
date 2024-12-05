# `stackMonitoringMaintenanceWindow` Submodule <a name="`stackMonitoringMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindow <a name="StackMonitoringMaintenanceWindow" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  resources: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]],
  schedule: StackMonitoringMaintenanceWindowSchedule,
  description: str = None,
  id: str = None,
  timeouts: StackMonitoringMaintenanceWindowTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.resources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.schedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resources` <a name="put_resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources"></a>

```python
def put_resources(
  value: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]

---

##### `put_schedule` <a name="put_schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule"></a>

```python
def put_schedule(
  schedule_type: str,
  maintenance_window_duration: str = None,
  maintenance_window_recurrences: str = None,
  time_maintenance_window_end: str = None,
  time_maintenance_window_start: str = None
) -> None
```

###### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.scheduleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}.

---

###### `maintenance_window_duration`<sup>Optional</sup> <a name="maintenance_window_duration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.maintenanceWindowDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}.

---

###### `maintenance_window_recurrences`<sup>Optional</sup> <a name="maintenance_window_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.maintenanceWindowRecurrences"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}.

---

###### `time_maintenance_window_end`<sup>Optional</sup> <a name="time_maintenance_window_end" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.timeMaintenanceWindowEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}.

---

###### `time_maintenance_window_start`<sup>Optional</sup> <a name="time_maintenance_window_start" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.timeMaintenanceWindowStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails">resources_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput">resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput">schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources"></a>

```python
resources: StackMonitoringMaintenanceWindowResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a>

---

##### `resources_details`<sup>Required</sup> <a name="resources_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails"></a>

```python
resources_details: StackMonitoringMaintenanceWindowResourcesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule"></a>

```python
schedule: StackMonitoringMaintenanceWindowScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts"></a>

```python
timeouts: StackMonitoringMaintenanceWindowTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput"></a>

```python
resources_input: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput"></a>

```python
schedule_input: StackMonitoringMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMaintenanceWindowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowConfig <a name="StackMonitoringMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  resources: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]],
  schedule: StackMonitoringMaintenanceWindowSchedule,
  description: str = None,
  id: str = None,
  timeouts: StackMonitoringMaintenanceWindowTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources"></a>

```python
resources: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule"></a>

```python
schedule: StackMonitoringMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMaintenanceWindowTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}

---

### StackMonitoringMaintenanceWindowResources <a name="StackMonitoringMaintenanceWindowResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources(
  resource_id: str,
  are_members_included: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded">are_members_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}.

---

##### `are_members_included`<sup>Optional</sup> <a name="are_members_included" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded"></a>

```python
are_members_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}.

---

### StackMonitoringMaintenanceWindowResourcesDetails <a name="StackMonitoringMaintenanceWindowResourcesDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails()
```


### StackMonitoringMaintenanceWindowSchedule <a name="StackMonitoringMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule(
  schedule_type: str,
  maintenance_window_duration: str = None,
  maintenance_window_recurrences: str = None,
  time_maintenance_window_end: str = None,
  time_maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences">maintenance_window_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd">time_maintenance_window_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart">time_maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}. |

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}.

---

##### `maintenance_window_duration`<sup>Optional</sup> <a name="maintenance_window_duration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}.

---

##### `maintenance_window_recurrences`<sup>Optional</sup> <a name="maintenance_window_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences"></a>

```python
maintenance_window_recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}.

---

##### `time_maintenance_window_end`<sup>Optional</sup> <a name="time_maintenance_window_end" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd"></a>

```python
time_maintenance_window_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}.

---

##### `time_maintenance_window_start`<sup>Optional</sup> <a name="time_maintenance_window_start" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart"></a>

```python
time_maintenance_window_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}.

---

### StackMonitoringMaintenanceWindowTimeouts <a name="StackMonitoringMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowResourcesDetailsList <a name="StackMonitoringMaintenanceWindowResourcesDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMaintenanceWindowResourcesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMaintenanceWindowResourcesDetailsOutputReference <a name="StackMonitoringMaintenanceWindowResourcesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers">number_of_members</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_members`<sup>Required</sup> <a name="number_of_members" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers"></a>

```python
number_of_members: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMaintenanceWindowResourcesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a>

---


### StackMonitoringMaintenanceWindowResourcesList <a name="StackMonitoringMaintenanceWindowResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMaintenanceWindowResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StackMonitoringMaintenanceWindowResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]]

---


### StackMonitoringMaintenanceWindowResourcesOutputReference <a name="StackMonitoringMaintenanceWindowResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded">reset_are_members_included</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_are_members_included` <a name="reset_are_members_included" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded"></a>

```python
def reset_are_members_included() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput">are_members_included_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded">are_members_included</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_members_included_input`<sup>Optional</sup> <a name="are_members_included_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput"></a>

```python
are_members_included_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `are_members_included`<sup>Required</sup> <a name="are_members_included" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded"></a>

```python
are_members_included: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMaintenanceWindowResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>]

---


### StackMonitoringMaintenanceWindowScheduleOutputReference <a name="StackMonitoringMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration">reset_maintenance_window_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences">reset_maintenance_window_recurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd">reset_time_maintenance_window_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart">reset_time_maintenance_window_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maintenance_window_duration` <a name="reset_maintenance_window_duration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration"></a>

```python
def reset_maintenance_window_duration() -> None
```

##### `reset_maintenance_window_recurrences` <a name="reset_maintenance_window_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences"></a>

```python
def reset_maintenance_window_recurrences() -> None
```

##### `reset_time_maintenance_window_end` <a name="reset_time_maintenance_window_end" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd"></a>

```python
def reset_time_maintenance_window_end() -> None
```

##### `reset_time_maintenance_window_start` <a name="reset_time_maintenance_window_start" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart"></a>

```python
def reset_time_maintenance_window_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput">maintenance_window_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput">maintenance_window_recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput">schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput">time_maintenance_window_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput">time_maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences">maintenance_window_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd">time_maintenance_window_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart">time_maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_window_duration_input`<sup>Optional</sup> <a name="maintenance_window_duration_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput"></a>

```python
maintenance_window_duration_input: str
```

- *Type:* str

---

##### `maintenance_window_recurrences_input`<sup>Optional</sup> <a name="maintenance_window_recurrences_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput"></a>

```python
maintenance_window_recurrences_input: str
```

- *Type:* str

---

##### `schedule_type_input`<sup>Optional</sup> <a name="schedule_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput"></a>

```python
schedule_type_input: str
```

- *Type:* str

---

##### `time_maintenance_window_end_input`<sup>Optional</sup> <a name="time_maintenance_window_end_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput"></a>

```python
time_maintenance_window_end_input: str
```

- *Type:* str

---

##### `time_maintenance_window_start_input`<sup>Optional</sup> <a name="time_maintenance_window_start_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput"></a>

```python
time_maintenance_window_start_input: str
```

- *Type:* str

---

##### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: str
```

- *Type:* str

---

##### `maintenance_window_recurrences`<sup>Required</sup> <a name="maintenance_window_recurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```python
maintenance_window_recurrences: str
```

- *Type:* str

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `time_maintenance_window_end`<sup>Required</sup> <a name="time_maintenance_window_end" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```python
time_maintenance_window_end: str
```

- *Type:* str

---

##### `time_maintenance_window_start`<sup>Required</sup> <a name="time_maintenance_window_start" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```python
time_maintenance_window_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---


### StackMonitoringMaintenanceWindowTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_window

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMaintenanceWindowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>]

---



