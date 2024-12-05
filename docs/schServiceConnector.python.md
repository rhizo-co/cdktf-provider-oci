# `schServiceConnector` Submodule <a name="`schServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.schServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchServiceConnector <a name="SchServiceConnector" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnector(
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
  display_name: str,
  source: SchServiceConnectorSource,
  target: SchServiceConnectorTarget,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  tasks: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]] = None,
  timeouts: SchServiceConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.target"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.tasks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource">put_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks">put_tasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks">reset_tasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource"></a>

```python
def put_source(
  kind: str,
  config_map: str = None,
  cursor: SchServiceConnectorSourceCursor = None,
  log_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]] = None,
  monitoring_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]] = None,
  plugin_name: str = None,
  stream_id: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

###### `config_map`<sup>Optional</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.configMap"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}.

---

###### `cursor`<sup>Optional</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.cursor"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

cursor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}

---

###### `log_sources`<sup>Optional</sup> <a name="log_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.logSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]

log_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}

---

###### `monitoring_sources`<sup>Optional</sup> <a name="monitoring_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.monitoringSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]

monitoring_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}

---

###### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.pluginName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}.

---

###### `stream_id`<sup>Optional</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putSource.parameter.streamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

##### `put_target` <a name="put_target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget"></a>

```python
def put_target(
  kind: str,
  batch_rollover_size_in_mbs: typing.Union[int, float] = None,
  batch_rollover_time_in_ms: typing.Union[int, float] = None,
  batch_size_in_kbs: typing.Union[int, float] = None,
  batch_size_in_num: typing.Union[int, float] = None,
  batch_time_in_sec: typing.Union[int, float] = None,
  bucket: str = None,
  compartment_id: str = None,
  dimensions: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]] = None,
  enable_formatted_messaging: typing.Union[bool, IResolvable] = None,
  function_id: str = None,
  log_group_id: str = None,
  log_source_identifier: str = None,
  metric: str = None,
  metric_namespace: str = None,
  namespace: str = None,
  object_name_prefix: str = None,
  stream_id: str = None,
  topic_id: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

###### `batch_rollover_size_in_mbs`<sup>Optional</sup> <a name="batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.batchRolloverSizeInMbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}.

---

###### `batch_rollover_time_in_ms`<sup>Optional</sup> <a name="batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.batchRolloverTimeInMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}.

---

###### `batch_size_in_kbs`<sup>Optional</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.batchSizeInKbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

###### `batch_size_in_num`<sup>Optional</sup> <a name="batch_size_in_num" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.batchSizeInNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}.

---

###### `batch_time_in_sec`<sup>Optional</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.batchTimeInSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}.

---

###### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}

---

###### `enable_formatted_messaging`<sup>Optional</sup> <a name="enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.enableFormattedMessaging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}.

---

###### `function_id`<sup>Optional</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.functionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

###### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

###### `log_source_identifier`<sup>Optional</sup> <a name="log_source_identifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.logSourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}.

---

###### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.metric"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}.

---

###### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.metricNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

###### `object_name_prefix`<sup>Optional</sup> <a name="object_name_prefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.objectNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}.

---

###### `stream_id`<sup>Optional</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.streamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

###### `topic_id`<sup>Optional</sup> <a name="topic_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTarget.parameter.topicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}.

---

##### `put_tasks` <a name="put_tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks"></a>

```python
def put_tasks(
  value: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTasks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tasks` <a name="reset_tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTasks"></a>

```python
def reset_tasks() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SchServiceConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput">source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput">target_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput">tasks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.source"></a>

```python
source: SchServiceConnectorSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference">SchServiceConnectorSourceOutputReference</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.target"></a>

```python
target: SchServiceConnectorTargetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference">SchServiceConnectorTargetOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasks"></a>

```python
tasks: SchServiceConnectorTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList">SchServiceConnectorTasksList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeouts"></a>

```python
timeouts: SchServiceConnectorTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference">SchServiceConnectorTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.sourceInput"></a>

```python
source_input: SchServiceConnectorSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.targetInput"></a>

```python
target_input: SchServiceConnectorTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---

##### `tasks_input`<sup>Optional</sup> <a name="tasks_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tasksInput"></a>

```python
tasks_input: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SchServiceConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchServiceConnectorConfig <a name="SchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  source: SchServiceConnectorSource,
  target: SchServiceConnectorTarget,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  tasks: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]] = None,
  timeouts: SchServiceConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#display_name SchServiceConnector#display_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.source"></a>

```python
source: SchServiceConnectorSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#source SchServiceConnector#source}

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.target"></a>

```python
target: SchServiceConnectorTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#target SchServiceConnector#target}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#defined_tags SchServiceConnector#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#description SchServiceConnector#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#freeform_tags SchServiceConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#id SchServiceConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#state SchServiceConnector#state}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.tasks"></a>

```python
tasks: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#tasks SchServiceConnector#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorConfig.property.timeouts"></a>

```python
timeouts: SchServiceConnectorTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#timeouts SchServiceConnector#timeouts}

---

### SchServiceConnectorSource <a name="SchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSource(
  kind: str,
  config_map: str = None,
  cursor: SchServiceConnectorSourceCursor = None,
  log_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]] = None,
  monitoring_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]] = None,
  plugin_name: str = None,
  stream_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap">config_map</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | cursor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources">log_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]</code> | log_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources">monitoring_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]</code> | monitoring_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName">plugin_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId">stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `config_map`<sup>Optional</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.configMap"></a>

```python
config_map: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#config_map SchServiceConnector#config_map}.

---

##### `cursor`<sup>Optional</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.cursor"></a>

```python
cursor: SchServiceConnectorSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

cursor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#cursor SchServiceConnector#cursor}

---

##### `log_sources`<sup>Optional</sup> <a name="log_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.logSources"></a>

```python
log_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]

log_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_sources SchServiceConnector#log_sources}

---

##### `monitoring_sources`<sup>Optional</sup> <a name="monitoring_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.monitoringSources"></a>

```python
monitoring_sources: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]

monitoring_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#monitoring_sources SchServiceConnector#monitoring_sources}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#plugin_name SchServiceConnector#plugin_name}.

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

### SchServiceConnectorSourceCursor <a name="SchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceCursor(
  kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorSourceLogSources <a name="SchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceLogSources(
  compartment_id: str = None,
  log_group_id: str = None,
  log_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}. |

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_id SchServiceConnector#log_id}.

---

### SchServiceConnectorSourceMonitoringSources <a name="SchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSources(
  compartment_id: str = None,
  namespace_details: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails">namespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | namespace_details block. |

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `namespace_details`<sup>Optional</sup> <a name="namespace_details" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources.property.namespaceDetails"></a>

```python
namespace_details: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

namespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace_details SchServiceConnector#namespace_details}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails(
  kind: str,
  namespaces: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces">namespaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]</code> | namespaces block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails.property.namespaces"></a>

```python
namespaces: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces(
  metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.metrics"></a>

```python
metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metrics SchServiceConnector#metrics}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics(
  kind: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

### SchServiceConnectorTarget <a name="SchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTarget(
  kind: str,
  batch_rollover_size_in_mbs: typing.Union[int, float] = None,
  batch_rollover_time_in_ms: typing.Union[int, float] = None,
  batch_size_in_kbs: typing.Union[int, float] = None,
  batch_size_in_num: typing.Union[int, float] = None,
  batch_time_in_sec: typing.Union[int, float] = None,
  bucket: str = None,
  compartment_id: str = None,
  dimensions: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]] = None,
  enable_formatted_messaging: typing.Union[bool, IResolvable] = None,
  function_id: str = None,
  log_group_id: str = None,
  log_source_identifier: str = None,
  metric: str = None,
  metric_namespace: str = None,
  namespace: str = None,
  object_name_prefix: str = None,
  stream_id: str = None,
  topic_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs">batch_rollover_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs">batch_rollover_time_in_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum">batch_size_in_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging">enable_formatted_messaging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier">log_source_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric">metric</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix">object_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId">stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId">topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batch_rollover_size_in_mbs`<sup>Optional</sup> <a name="batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverSizeInMbs"></a>

```python
batch_rollover_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_size_in_mbs SchServiceConnector#batch_rollover_size_in_mbs}.

---

##### `batch_rollover_time_in_ms`<sup>Optional</sup> <a name="batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchRolloverTimeInMs"></a>

```python
batch_rollover_time_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_rollover_time_in_ms SchServiceConnector#batch_rollover_time_in_ms}.

---

##### `batch_size_in_kbs`<sup>Optional</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batch_size_in_num`<sup>Optional</sup> <a name="batch_size_in_num" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchSizeInNum"></a>

```python
batch_size_in_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_num SchServiceConnector#batch_size_in_num}.

---

##### `batch_time_in_sec`<sup>Optional</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#bucket SchServiceConnector#bucket}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#compartment_id SchServiceConnector#compartment_id}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimensions SchServiceConnector#dimensions}

---

##### `enable_formatted_messaging`<sup>Optional</sup> <a name="enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.enableFormattedMessaging"></a>

```python
enable_formatted_messaging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#enable_formatted_messaging SchServiceConnector#enable_formatted_messaging}.

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_group_id SchServiceConnector#log_group_id}.

---

##### `log_source_identifier`<sup>Optional</sup> <a name="log_source_identifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.logSourceIdentifier"></a>

```python
log_source_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#log_source_identifier SchServiceConnector#log_source_identifier}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metric"></a>

```python
metric: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric SchServiceConnector#metric}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#metric_namespace SchServiceConnector#metric_namespace}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespace SchServiceConnector#namespace}.

---

##### `object_name_prefix`<sup>Optional</sup> <a name="object_name_prefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.objectNamePrefix"></a>

```python
object_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#object_name_prefix SchServiceConnector#object_name_prefix}.

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#stream_id SchServiceConnector#stream_id}.

---

##### `topic_id`<sup>Optional</sup> <a name="topic_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#topic_id SchServiceConnector#topic_id}.

---

### SchServiceConnectorTargetDimensions <a name="SchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetDimensions(
  dimension_value: SchServiceConnectorTargetDimensionsDimensionValue = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue">dimension_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | dimension_value block. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}. |

---

##### `dimension_value`<sup>Optional</sup> <a name="dimension_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.dimensionValue"></a>

```python
dimension_value: SchServiceConnectorTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

dimension_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#dimension_value SchServiceConnector#dimension_value}

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#name SchServiceConnector#name}.

---

### SchServiceConnectorTargetDimensionsDimensionValue <a name="SchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue(
  kind: str,
  path: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}.

---

### SchServiceConnectorTasks <a name="SchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTasks(
  kind: str,
  batch_size_in_kbs: typing.Union[int, float] = None,
  batch_time_in_sec: typing.Union[int, float] = None,
  condition: str = None,
  function_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `batch_size_in_kbs`<sup>Optional</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_size_in_kbs SchServiceConnector#batch_size_in_kbs}.

---

##### `batch_time_in_sec`<sup>Optional</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#batch_time_in_sec SchServiceConnector#batch_time_in_sec}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#condition SchServiceConnector#condition}.

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#function_id SchServiceConnector#function_id}.

---

### SchServiceConnectorTimeouts <a name="SchServiceConnectorTimeouts" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#create SchServiceConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#delete SchServiceConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#update SchServiceConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SchServiceConnectorSourceCursorOutputReference <a name="SchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceCursorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind">reset_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kind` <a name="reset_kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---


### SchServiceConnectorSourceLogSourcesList <a name="SchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceLogSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchServiceConnectorSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]

---


### SchServiceConnectorSourceLogSourcesOutputReference <a name="SchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId">reset_log_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId">reset_log_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_log_group_id` <a name="reset_log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogGroupId"></a>

```python
def reset_log_group_id() -> None
```

##### `reset_log_id` <a name="reset_log_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.resetLogId"></a>

```python
def reset_log_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorSourceLogSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]

---


### SchServiceConnectorSourceMonitoringSourcesList <a name="SchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchServiceConnectorSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics">put_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metrics` <a name="put_metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics"></a>

```python
def put_metrics(
  kind: str
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.putMetrics.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput">metrics_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```python
metrics: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference</a>

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metricsInput"></a>

```python
metrics_input: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]

---


### SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces">put_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaces` <a name="put_namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces"></a>

```python
def put_namespaces(
  value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```python
namespaces: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### SchServiceConnectorSourceMonitoringSourcesOutputReference <a name="SchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails">put_namespace_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails">reset_namespace_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespace_details` <a name="put_namespace_details" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails"></a>

```python
def put_namespace_details(
  kind: str,
  namespaces: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces]]
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.putNamespaceDetails.parameter.namespaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>]]

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#namespaces SchServiceConnector#namespaces}

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_namespace_details` <a name="reset_namespace_details" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.resetNamespaceDetails"></a>

```python
def reset_namespace_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespace_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput">namespace_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_details`<sup>Required</sup> <a name="namespace_details" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```python
namespace_details: SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference">SchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `namespace_details_input`<sup>Optional</sup> <a name="namespace_details_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetailsInput"></a>

```python
namespace_details_input: SchServiceConnectorSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesNamespaceDetails">SchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorSourceMonitoringSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]

---


### SchServiceConnectorSourceOutputReference <a name="SchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor">put_cursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources">put_log_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources">put_monitoring_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap">reset_config_map</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor">reset_cursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources">reset_log_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources">reset_monitoring_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName">reset_plugin_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cursor` <a name="put_cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor"></a>

```python
def put_cursor(
  kind: str = None
) -> None
```

###### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putCursor.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

##### `put_log_sources` <a name="put_log_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources"></a>

```python
def put_log_sources(
  value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putLogSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]

---

##### `put_monitoring_sources` <a name="put_monitoring_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources"></a>

```python
def put_monitoring_sources(
  value: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.putMonitoringSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]

---

##### `reset_config_map` <a name="reset_config_map" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetConfigMap"></a>

```python
def reset_config_map() -> None
```

##### `reset_cursor` <a name="reset_cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetCursor"></a>

```python
def reset_cursor() -> None
```

##### `reset_log_sources` <a name="reset_log_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetLogSources"></a>

```python
def reset_log_sources() -> None
```

##### `reset_monitoring_sources` <a name="reset_monitoring_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetMonitoringSources"></a>

```python
def reset_monitoring_sources() -> None
```

##### `reset_plugin_name` <a name="reset_plugin_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetPluginName"></a>

```python
def reset_plugin_name() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources">log_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources">monitoring_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput">config_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput">cursor_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput">log_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput">monitoring_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput">plugin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap">config_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursor"></a>

```python
cursor: SchServiceConnectorSourceCursorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursorOutputReference">SchServiceConnectorSourceCursorOutputReference</a>

---

##### `log_sources`<sup>Required</sup> <a name="log_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSources"></a>

```python
log_sources: SchServiceConnectorSourceLogSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSourcesList">SchServiceConnectorSourceLogSourcesList</a>

---

##### `monitoring_sources`<sup>Required</sup> <a name="monitoring_sources" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```python
monitoring_sources: SchServiceConnectorSourceMonitoringSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSourcesList">SchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `config_map_input`<sup>Optional</sup> <a name="config_map_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMapInput"></a>

```python
config_map_input: str
```

- *Type:* str

---

##### `cursor_input`<sup>Optional</sup> <a name="cursor_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.cursorInput"></a>

```python
cursor_input: SchServiceConnectorSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceCursor">SchServiceConnectorSourceCursor</a>

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `log_sources_input`<sup>Optional</sup> <a name="log_sources_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.logSourcesInput"></a>

```python
log_sources_input: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceLogSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceLogSources">SchServiceConnectorSourceLogSources</a>]]

---

##### `monitoring_sources_input`<sup>Optional</sup> <a name="monitoring_sources_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.monitoringSourcesInput"></a>

```python
monitoring_sources_input: typing.Union[IResolvable, typing.List[SchServiceConnectorSourceMonitoringSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceMonitoringSources">SchServiceConnectorSourceMonitoringSources</a>]]

---

##### `plugin_name_input`<sup>Optional</sup> <a name="plugin_name_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginNameInput"></a>

```python
plugin_name_input: str
```

- *Type:* str

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `config_map`<sup>Required</sup> <a name="config_map" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.configMap"></a>

```python
config_map: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSourceOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorSource">SchServiceConnectorSource</a>

---


### SchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="SchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---


### SchServiceConnectorTargetDimensionsList <a name="SchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchServiceConnectorTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]

---


### SchServiceConnectorTargetDimensionsOutputReference <a name="SchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue">put_dimension_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue">reset_dimension_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension_value` <a name="put_dimension_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue"></a>

```python
def put_dimension_value(
  kind: str,
  path: str = None,
  value: str = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#kind SchServiceConnector#kind}.

---

###### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#path SchServiceConnector#path}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.putDimensionValue.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/sch_service_connector#value SchServiceConnector#value}.

---

##### `reset_dimension_value` <a name="reset_dimension_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetDimensionValue"></a>

```python
def reset_dimension_value() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">dimension_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput">dimension_value_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_value`<sup>Required</sup> <a name="dimension_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```python
dimension_value: SchServiceConnectorTargetDimensionsDimensionValueOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValueOutputReference">SchServiceConnectorTargetDimensionsDimensionValueOutputReference</a>

---

##### `dimension_value_input`<sup>Optional</sup> <a name="dimension_value_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.dimensionValueInput"></a>

```python
dimension_value_input: SchServiceConnectorTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsDimensionValue">SchServiceConnectorTargetDimensionsDimensionValue</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorTargetDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]

---


### SchServiceConnectorTargetOutputReference <a name="SchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs">reset_batch_rollover_size_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs">reset_batch_rollover_time_in_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs">reset_batch_size_in_kbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum">reset_batch_size_in_num</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec">reset_batch_time_in_sec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging">reset_enable_formatted_messaging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId">reset_function_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId">reset_log_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier">reset_log_source_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace">reset_metric_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix">reset_object_name_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId">reset_topic_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]

---

##### `reset_batch_rollover_size_in_mbs` <a name="reset_batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverSizeInMbs"></a>

```python
def reset_batch_rollover_size_in_mbs() -> None
```

##### `reset_batch_rollover_time_in_ms` <a name="reset_batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchRolloverTimeInMs"></a>

```python
def reset_batch_rollover_time_in_ms() -> None
```

##### `reset_batch_size_in_kbs` <a name="reset_batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInKbs"></a>

```python
def reset_batch_size_in_kbs() -> None
```

##### `reset_batch_size_in_num` <a name="reset_batch_size_in_num" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchSizeInNum"></a>

```python
def reset_batch_size_in_num() -> None
```

##### `reset_batch_time_in_sec` <a name="reset_batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBatchTimeInSec"></a>

```python
def reset_batch_time_in_sec() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_enable_formatted_messaging` <a name="reset_enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetEnableFormattedMessaging"></a>

```python
def reset_enable_formatted_messaging() -> None
```

##### `reset_function_id` <a name="reset_function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetFunctionId"></a>

```python
def reset_function_id() -> None
```

##### `reset_log_group_id` <a name="reset_log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogGroupId"></a>

```python
def reset_log_group_id() -> None
```

##### `reset_log_source_identifier` <a name="reset_log_source_identifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetLogSourceIdentifier"></a>

```python
def reset_log_source_identifier() -> None
```

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_namespace` <a name="reset_metric_namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetMetricNamespace"></a>

```python
def reset_metric_namespace() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object_name_prefix` <a name="reset_object_name_prefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetObjectNamePrefix"></a>

```python
def reset_object_name_prefix() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

##### `reset_topic_id` <a name="reset_topic_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.resetTopicId"></a>

```python
def reset_topic_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput">batch_rollover_size_in_mbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput">batch_rollover_time_in_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput">batch_size_in_kbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput">batch_size_in_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput">batch_time_in_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput">enable_formatted_messaging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput">log_source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput">object_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput">topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">batch_rollover_size_in_mbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">batch_rollover_time_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum">batch_size_in_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">enable_formatted_messaging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier">log_source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix">object_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensions"></a>

```python
dimensions: SchServiceConnectorTargetDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensionsList">SchServiceConnectorTargetDimensionsList</a>

---

##### `batch_rollover_size_in_mbs_input`<sup>Optional</sup> <a name="batch_rollover_size_in_mbs_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbsInput"></a>

```python
batch_rollover_size_in_mbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_rollover_time_in_ms_input`<sup>Optional</sup> <a name="batch_rollover_time_in_ms_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMsInput"></a>

```python
batch_rollover_time_in_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_kbs_input`<sup>Optional</sup> <a name="batch_size_in_kbs_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbsInput"></a>

```python
batch_size_in_kbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_num_input`<sup>Optional</sup> <a name="batch_size_in_num_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNumInput"></a>

```python
batch_size_in_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec_input`<sup>Optional</sup> <a name="batch_time_in_sec_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSecInput"></a>

```python
batch_time_in_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[SchServiceConnectorTargetDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetDimensions">SchServiceConnectorTargetDimensions</a>]]

---

##### `enable_formatted_messaging_input`<sup>Optional</sup> <a name="enable_formatted_messaging_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessagingInput"></a>

```python
enable_formatted_messaging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_source_identifier_input`<sup>Optional</sup> <a name="log_source_identifier_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifierInput"></a>

```python
log_source_identifier_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_name_prefix_input`<sup>Optional</sup> <a name="object_name_prefix_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefixInput"></a>

```python
object_name_prefix_input: str
```

- *Type:* str

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `topic_id_input`<sup>Optional</sup> <a name="topic_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicIdInput"></a>

```python
topic_id_input: str
```

- *Type:* str

---

##### `batch_rollover_size_in_mbs`<sup>Required</sup> <a name="batch_rollover_size_in_mbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```python
batch_rollover_size_in_mbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_rollover_time_in_ms`<sup>Required</sup> <a name="batch_rollover_time_in_ms" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```python
batch_rollover_time_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_in_num`<sup>Required</sup> <a name="batch_size_in_num" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```python
batch_size_in_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `enable_formatted_messaging`<sup>Required</sup> <a name="enable_formatted_messaging" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```python
enable_formatted_messaging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_source_identifier`<sup>Required</sup> <a name="log_source_identifier" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```python
log_source_identifier: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_name_prefix`<sup>Required</sup> <a name="object_name_prefix" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```python
object_name_prefix: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTargetOutputReference.property.internalValue"></a>

```python
internal_value: SchServiceConnectorTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTarget">SchServiceConnectorTarget</a>

---


### SchServiceConnectorTasksList <a name="SchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchServiceConnectorTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SchServiceConnectorTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]]

---


### SchServiceConnectorTasksOutputReference <a name="SchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs">reset_batch_size_in_kbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec">reset_batch_time_in_sec</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId">reset_function_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_size_in_kbs` <a name="reset_batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchSizeInKbs"></a>

```python
def reset_batch_size_in_kbs() -> None
```

##### `reset_batch_time_in_sec` <a name="reset_batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetBatchTimeInSec"></a>

```python
def reset_batch_time_in_sec() -> None
```

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_function_id` <a name="reset_function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.resetFunctionId"></a>

```python
def reset_function_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput">batch_size_in_kbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput">batch_time_in_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs">batch_size_in_kbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec">batch_time_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_in_kbs_input`<sup>Optional</sup> <a name="batch_size_in_kbs_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbsInput"></a>

```python
batch_size_in_kbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec_input`<sup>Optional</sup> <a name="batch_time_in_sec_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSecInput"></a>

```python
batch_time_in_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `batch_size_in_kbs`<sup>Required</sup> <a name="batch_size_in_kbs" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```python
batch_size_in_kbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_time_in_sec`<sup>Required</sup> <a name="batch_time_in_sec" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```python
batch_time_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorTasks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTasks">SchServiceConnectorTasks</a>]

---


### SchServiceConnectorTimeoutsOutputReference <a name="SchServiceConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import sch_service_connector

schServiceConnector.SchServiceConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SchServiceConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.schServiceConnector.SchServiceConnectorTimeouts">SchServiceConnectorTimeouts</a>]

---



