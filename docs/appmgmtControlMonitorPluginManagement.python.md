# `appmgmtControlMonitorPluginManagement` Submodule <a name="`appmgmtControlMonitorPluginManagement` Submodule" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmgmtControlMonitorPluginManagement <a name="AppmgmtControlMonitorPluginManagement" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management oci_appmgmt_control_monitor_plugin_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_instance_id: str,
  id: str = None,
  timeouts: AppmgmtControlMonitorPluginManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.monitoredInstanceId">monitored_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_instance_id`<sup>Required</sup> <a name="monitored_instance_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.monitoredInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#timeouts AppmgmtControlMonitorPluginManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#create AppmgmtControlMonitorPluginManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#delete AppmgmtControlMonitorPluginManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#update AppmgmtControlMonitorPluginManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppmgmtControlMonitorPluginManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppmgmtControlMonitorPluginManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppmgmtControlMonitorPluginManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppmgmtControlMonitorPluginManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppmgmtControlMonitorPluginManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDescription">monitored_instance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDisplayName">monitored_instance_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceManagementAgentId">monitored_instance_management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference">AppmgmtControlMonitorPluginManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceIdInput">monitored_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceId">monitored_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `monitored_instance_description`<sup>Required</sup> <a name="monitored_instance_description" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDescription"></a>

```python
monitored_instance_description: str
```

- *Type:* str

---

##### `monitored_instance_display_name`<sup>Required</sup> <a name="monitored_instance_display_name" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDisplayName"></a>

```python
monitored_instance_display_name: str
```

- *Type:* str

---

##### `monitored_instance_management_agent_id`<sup>Required</sup> <a name="monitored_instance_management_agent_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceManagementAgentId"></a>

```python
monitored_instance_management_agent_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeouts"></a>

```python
timeouts: AppmgmtControlMonitorPluginManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference">AppmgmtControlMonitorPluginManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitored_instance_id_input`<sup>Optional</sup> <a name="monitored_instance_id_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceIdInput"></a>

```python
monitored_instance_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppmgmtControlMonitorPluginManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitored_instance_id`<sup>Required</sup> <a name="monitored_instance_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceId"></a>

```python
monitored_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppmgmtControlMonitorPluginManagementConfig <a name="AppmgmtControlMonitorPluginManagementConfig" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitored_instance_id: str,
  id: str = None,
  timeouts: AppmgmtControlMonitorPluginManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.monitoredInstanceId">monitored_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitored_instance_id`<sup>Required</sup> <a name="monitored_instance_id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.monitoredInstanceId"></a>

```python
monitored_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.timeouts"></a>

```python
timeouts: AppmgmtControlMonitorPluginManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#timeouts AppmgmtControlMonitorPluginManagement#timeouts}

---

### AppmgmtControlMonitorPluginManagementTimeouts <a name="AppmgmtControlMonitorPluginManagementTimeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#create AppmgmtControlMonitorPluginManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#delete AppmgmtControlMonitorPluginManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#update AppmgmtControlMonitorPluginManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#create AppmgmtControlMonitorPluginManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#delete AppmgmtControlMonitorPluginManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#update AppmgmtControlMonitorPluginManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmgmtControlMonitorPluginManagementTimeoutsOutputReference <a name="AppmgmtControlMonitorPluginManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import appmgmt_control_monitor_plugin_management

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppmgmtControlMonitorPluginManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>]

---



