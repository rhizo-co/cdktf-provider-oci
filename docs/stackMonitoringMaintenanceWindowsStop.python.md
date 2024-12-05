# `stackMonitoringMaintenanceWindowsStop` Submodule <a name="`stackMonitoringMaintenanceWindowsStop` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindowsStop <a name="StackMonitoringMaintenanceWindowsStop" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop oci_stack_monitoring_maintenance_windows_stop}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_window_id: str,
  id: str = None,
  timeouts: StackMonitoringMaintenanceWindowsStopTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.maintenanceWindowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#timeouts StackMonitoringMaintenanceWindowsStop#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#create StackMonitoringMaintenanceWindowsStop#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#delete StackMonitoringMaintenanceWindowsStop#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#update StackMonitoringMaintenanceWindowsStop#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsStop resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsStop resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMaintenanceWindowsStop to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMaintenanceWindowsStop that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindowsStop to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference">StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowIdInput">maintenance_window_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeouts"></a>

```python
timeouts: StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference">StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_id_input`<sup>Optional</sup> <a name="maintenance_window_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowIdInput"></a>

```python
maintenance_window_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMaintenanceWindowsStopTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowsStopConfig <a name="StackMonitoringMaintenanceWindowsStopConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  maintenance_window_id: str,
  id: str = None,
  timeouts: StackMonitoringMaintenanceWindowsStopTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMaintenanceWindowsStopTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#timeouts StackMonitoringMaintenanceWindowsStop#timeouts}

---

### StackMonitoringMaintenanceWindowsStopTimeouts <a name="StackMonitoringMaintenanceWindowsStopTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#create StackMonitoringMaintenanceWindowsStop#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#delete StackMonitoringMaintenanceWindowsStop#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#update StackMonitoringMaintenanceWindowsStop#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#create StackMonitoringMaintenanceWindowsStop#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#delete StackMonitoringMaintenanceWindowsStop#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#update StackMonitoringMaintenanceWindowsStop#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_maintenance_windows_stop

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMaintenanceWindowsStopTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>]

---



