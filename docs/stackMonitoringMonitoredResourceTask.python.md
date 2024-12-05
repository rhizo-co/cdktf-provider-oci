# `stackMonitoringMonitoredResourceTask` Submodule <a name="`stackMonitoringMonitoredResourceTask` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourceTask <a name="StackMonitoringMonitoredResourceTask" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask(
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
  task_details: StackMonitoringMonitoredResourceTaskTaskDetails,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  name: str = None,
  timeouts: StackMonitoringMonitoredResourceTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.taskDetails">task_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | task_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}.

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.taskDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

task_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails">put_task_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_task_details` <a name="put_task_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails"></a>

```python
def put_task_details(
  namespace: str,
  source: str,
  type: str,
  availability_proxy_metric_collection_interval: typing.Union[int, float] = None,
  availability_proxy_metrics: typing.List[str] = None,
  console_path_prefix: str = None,
  external_id_mapping: str = None,
  lifecycle_status_mappings_for_up_status: typing.List[str] = None,
  resource_group: str = None,
  resource_name_filter: str = None,
  resource_name_mapping: str = None,
  resource_type_filter: str = None,
  resource_type_mapping: str = None,
  service_base_url: str = None,
  should_use_metrics_flow_for_status: typing.Union[bool, IResolvable] = None
) -> None
```

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}.

---

###### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}.

---

###### `availability_proxy_metric_collection_interval`<sup>Optional</sup> <a name="availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.availabilityProxyMetricCollectionInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}.

---

###### `availability_proxy_metrics`<sup>Optional</sup> <a name="availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.availabilityProxyMetrics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}.

---

###### `console_path_prefix`<sup>Optional</sup> <a name="console_path_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.consolePathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}.

---

###### `external_id_mapping`<sup>Optional</sup> <a name="external_id_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.externalIdMapping"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}.

---

###### `lifecycle_status_mappings_for_up_status`<sup>Optional</sup> <a name="lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.lifecycleStatusMappingsForUpStatus"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}.

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}.

---

###### `resource_name_filter`<sup>Optional</sup> <a name="resource_name_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.resourceNameFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}.

---

###### `resource_name_mapping`<sup>Optional</sup> <a name="resource_name_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.resourceNameMapping"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}.

---

###### `resource_type_filter`<sup>Optional</sup> <a name="resource_type_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.resourceTypeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}.

---

###### `resource_type_mapping`<sup>Optional</sup> <a name="resource_type_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.resourceTypeMapping"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}.

---

###### `service_base_url`<sup>Optional</sup> <a name="service_base_url" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.serviceBaseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}.

---

###### `should_use_metrics_flow_for_status`<sup>Optional</sup> <a name="should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.shouldUseMetricsFlowForStatus"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMonitoredResourceTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMonitoredResourceTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourceTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails">task_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds">work_request_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput">task_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails"></a>

```python
task_details: StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a>

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourceTaskTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_ids`<sup>Required</sup> <a name="work_request_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds"></a>

```python
work_request_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `task_details_input`<sup>Optional</sup> <a name="task_details_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput"></a>

```python
task_details_input: StackMonitoringMonitoredResourceTaskTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMonitoredResourceTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceTaskConfig <a name="StackMonitoringMonitoredResourceTaskConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  task_details: StackMonitoringMonitoredResourceTaskTaskDetails,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  name: str = None,
  timeouts: StackMonitoringMonitoredResourceTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails">task_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | task_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}.

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails"></a>

```python
task_details: StackMonitoringMonitoredResourceTaskTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

task_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourceTaskTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}

---

### StackMonitoringMonitoredResourceTaskTaskDetails <a name="StackMonitoringMonitoredResourceTaskTaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails(
  namespace: str,
  source: str,
  type: str,
  availability_proxy_metric_collection_interval: typing.Union[int, float] = None,
  availability_proxy_metrics: typing.List[str] = None,
  console_path_prefix: str = None,
  external_id_mapping: str = None,
  lifecycle_status_mappings_for_up_status: typing.List[str] = None,
  resource_group: str = None,
  resource_name_filter: str = None,
  resource_name_mapping: str = None,
  resource_type_filter: str = None,
  resource_type_mapping: str = None,
  service_base_url: str = None,
  should_use_metrics_flow_for_status: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval">availability_proxy_metric_collection_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics">availability_proxy_metrics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix">console_path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping">external_id_mapping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus">lifecycle_status_mappings_for_up_status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter">resource_name_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping">resource_name_mapping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter">resource_type_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping">resource_type_mapping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl">service_base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus">should_use_metrics_flow_for_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}.

---

##### `availability_proxy_metric_collection_interval`<sup>Optional</sup> <a name="availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval"></a>

```python
availability_proxy_metric_collection_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}.

---

##### `availability_proxy_metrics`<sup>Optional</sup> <a name="availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics"></a>

```python
availability_proxy_metrics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}.

---

##### `console_path_prefix`<sup>Optional</sup> <a name="console_path_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix"></a>

```python
console_path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}.

---

##### `external_id_mapping`<sup>Optional</sup> <a name="external_id_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping"></a>

```python
external_id_mapping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}.

---

##### `lifecycle_status_mappings_for_up_status`<sup>Optional</sup> <a name="lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus"></a>

```python
lifecycle_status_mappings_for_up_status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}.

---

##### `resource_name_filter`<sup>Optional</sup> <a name="resource_name_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter"></a>

```python
resource_name_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}.

---

##### `resource_name_mapping`<sup>Optional</sup> <a name="resource_name_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping"></a>

```python
resource_name_mapping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}.

---

##### `resource_type_filter`<sup>Optional</sup> <a name="resource_type_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter"></a>

```python
resource_type_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}.

---

##### `resource_type_mapping`<sup>Optional</sup> <a name="resource_type_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping"></a>

```python
resource_type_mapping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}.

---

##### `service_base_url`<sup>Optional</sup> <a name="service_base_url" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl"></a>

```python
service_base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}.

---

##### `should_use_metrics_flow_for_status`<sup>Optional</sup> <a name="should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus"></a>

```python
should_use_metrics_flow_for_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}.

---

### StackMonitoringMonitoredResourceTaskTimeouts <a name="StackMonitoringMonitoredResourceTaskTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference <a name="StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval">reset_availability_proxy_metric_collection_interval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics">reset_availability_proxy_metrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix">reset_console_path_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping">reset_external_id_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus">reset_lifecycle_status_mappings_for_up_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter">reset_resource_name_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping">reset_resource_name_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter">reset_resource_type_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping">reset_resource_type_mapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl">reset_service_base_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus">reset_should_use_metrics_flow_for_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_proxy_metric_collection_interval` <a name="reset_availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval"></a>

```python
def reset_availability_proxy_metric_collection_interval() -> None
```

##### `reset_availability_proxy_metrics` <a name="reset_availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics"></a>

```python
def reset_availability_proxy_metrics() -> None
```

##### `reset_console_path_prefix` <a name="reset_console_path_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix"></a>

```python
def reset_console_path_prefix() -> None
```

##### `reset_external_id_mapping` <a name="reset_external_id_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping"></a>

```python
def reset_external_id_mapping() -> None
```

##### `reset_lifecycle_status_mappings_for_up_status` <a name="reset_lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus"></a>

```python
def reset_lifecycle_status_mappings_for_up_status() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_name_filter` <a name="reset_resource_name_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter"></a>

```python
def reset_resource_name_filter() -> None
```

##### `reset_resource_name_mapping` <a name="reset_resource_name_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping"></a>

```python
def reset_resource_name_mapping() -> None
```

##### `reset_resource_type_filter` <a name="reset_resource_type_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter"></a>

```python
def reset_resource_type_filter() -> None
```

##### `reset_resource_type_mapping` <a name="reset_resource_type_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping"></a>

```python
def reset_resource_type_mapping() -> None
```

##### `reset_service_base_url` <a name="reset_service_base_url" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl"></a>

```python
def reset_service_base_url() -> None
```

##### `reset_should_use_metrics_flow_for_status` <a name="reset_should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus"></a>

```python
def reset_should_use_metrics_flow_for_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput">availability_proxy_metric_collection_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput">availability_proxy_metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput">console_path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput">external_id_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput">lifecycle_status_mappings_for_up_status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput">resource_name_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput">resource_name_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput">resource_type_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput">resource_type_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput">service_base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput">should_use_metrics_flow_for_status_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">availability_proxy_metric_collection_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics">availability_proxy_metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix">console_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping">external_id_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">lifecycle_status_mappings_for_up_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter">resource_name_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping">resource_name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter">resource_type_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping">resource_type_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl">service_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">should_use_metrics_flow_for_status</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_proxy_metric_collection_interval_input`<sup>Optional</sup> <a name="availability_proxy_metric_collection_interval_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput"></a>

```python
availability_proxy_metric_collection_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_proxy_metrics_input`<sup>Optional</sup> <a name="availability_proxy_metrics_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput"></a>

```python
availability_proxy_metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `console_path_prefix_input`<sup>Optional</sup> <a name="console_path_prefix_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput"></a>

```python
console_path_prefix_input: str
```

- *Type:* str

---

##### `external_id_mapping_input`<sup>Optional</sup> <a name="external_id_mapping_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput"></a>

```python
external_id_mapping_input: str
```

- *Type:* str

---

##### `lifecycle_status_mappings_for_up_status_input`<sup>Optional</sup> <a name="lifecycle_status_mappings_for_up_status_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput"></a>

```python
lifecycle_status_mappings_for_up_status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_name_filter_input`<sup>Optional</sup> <a name="resource_name_filter_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput"></a>

```python
resource_name_filter_input: str
```

- *Type:* str

---

##### `resource_name_mapping_input`<sup>Optional</sup> <a name="resource_name_mapping_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput"></a>

```python
resource_name_mapping_input: str
```

- *Type:* str

---

##### `resource_type_filter_input`<sup>Optional</sup> <a name="resource_type_filter_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput"></a>

```python
resource_type_filter_input: str
```

- *Type:* str

---

##### `resource_type_mapping_input`<sup>Optional</sup> <a name="resource_type_mapping_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput"></a>

```python
resource_type_mapping_input: str
```

- *Type:* str

---

##### `service_base_url_input`<sup>Optional</sup> <a name="service_base_url_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput"></a>

```python
service_base_url_input: str
```

- *Type:* str

---

##### `should_use_metrics_flow_for_status_input`<sup>Optional</sup> <a name="should_use_metrics_flow_for_status_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput"></a>

```python
should_use_metrics_flow_for_status_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `availability_proxy_metric_collection_interval`<sup>Required</sup> <a name="availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```python
availability_proxy_metric_collection_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_proxy_metrics`<sup>Required</sup> <a name="availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```python
availability_proxy_metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `console_path_prefix`<sup>Required</sup> <a name="console_path_prefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix"></a>

```python
console_path_prefix: str
```

- *Type:* str

---

##### `external_id_mapping`<sup>Required</sup> <a name="external_id_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping"></a>

```python
external_id_mapping: str
```

- *Type:* str

---

##### `lifecycle_status_mappings_for_up_status`<sup>Required</sup> <a name="lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```python
lifecycle_status_mappings_for_up_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_name_filter`<sup>Required</sup> <a name="resource_name_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter"></a>

```python
resource_name_filter: str
```

- *Type:* str

---

##### `resource_name_mapping`<sup>Required</sup> <a name="resource_name_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping"></a>

```python
resource_name_mapping: str
```

- *Type:* str

---

##### `resource_type_filter`<sup>Required</sup> <a name="resource_type_filter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```python
resource_type_filter: str
```

- *Type:* str

---

##### `resource_type_mapping`<sup>Required</sup> <a name="resource_type_mapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```python
resource_type_mapping: str
```

- *Type:* str

---

##### `service_base_url`<sup>Required</sup> <a name="service_base_url" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```python
service_base_url: str
```

- *Type:* str

---

##### `should_use_metrics_flow_for_status`<sup>Required</sup> <a name="should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```python
should_use_metrics_flow_for_status: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMonitoredResourceTaskTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---


### StackMonitoringMonitoredResourceTaskTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTaskTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resource_task

stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMonitoredResourceTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>]

---



