# `devopsTrigger` Submodule <a name="`devopsTrigger` Submodule" id="rhizo-co-terraform-provider-oci.devopsTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsTrigger <a name="DevopsTrigger" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger oci_devops_trigger}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.Union[IResolvable, typing.List[DevopsTriggerActions]],
  project_id: str,
  trigger_source: str,
  connection_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  repository_id: str = None,
  timeouts: DevopsTriggerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#project_id DevopsTrigger#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.triggerSource">trigger_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#connection_id DevopsTrigger#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#defined_tags DevopsTrigger#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#description DevopsTrigger#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#display_name DevopsTrigger#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#freeform_tags DevopsTrigger#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#id DevopsTrigger#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_id DevopsTrigger#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.actions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#actions DevopsTrigger#actions}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#project_id DevopsTrigger#project_id}.

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.triggerSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#connection_id DevopsTrigger#connection_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#defined_tags DevopsTrigger#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#description DevopsTrigger#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#display_name DevopsTrigger#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#freeform_tags DevopsTrigger#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#id DevopsTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_id DevopsTrigger#repository_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#timeouts DevopsTrigger#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[DevopsTriggerActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#create DevopsTrigger#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#delete DevopsTrigger#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#update DevopsTrigger#update}.

---

##### `reset_connection_id` <a name="reset_connection_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList">DevopsTriggerActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference">DevopsTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerUrl">trigger_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.actions"></a>

```python
actions: DevopsTriggerActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList">DevopsTriggerActionsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeouts"></a>

```python
timeouts: DevopsTriggerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference">DevopsTriggerTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `trigger_url`<sup>Required</sup> <a name="trigger_url" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerUrl"></a>

```python
trigger_url: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[DevopsTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevopsTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>]

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsTriggerActions <a name="DevopsTriggerActions" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActions(
  build_pipeline_id: str,
  type: str,
  filter: DevopsTriggerActionsFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.buildPipelineId">build_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#build_pipeline_id DevopsTrigger#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#type DevopsTrigger#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a></code> | filter block. |

---

##### `build_pipeline_id`<sup>Required</sup> <a name="build_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.buildPipelineId"></a>

```python
build_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#build_pipeline_id DevopsTrigger#build_pipeline_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#type DevopsTrigger#type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions.property.filter"></a>

```python
filter: DevopsTriggerActionsFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#filter DevopsTrigger#filter}

---

### DevopsTriggerActionsFilter <a name="DevopsTriggerActionsFilter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilter(
  trigger_source: str,
  events: typing.List[str] = None,
  exclude: DevopsTriggerActionsFilterExclude = None,
  include: DevopsTriggerActionsFilterInclude = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.triggerSource">trigger_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#events DevopsTrigger#events}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.exclude">exclude</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a></code> | exclude block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a></code> | include block. |

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}.

---

##### `events`<sup>Optional</sup> <a name="events" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#events DevopsTrigger#events}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.exclude"></a>

```python
exclude: DevopsTriggerActionsFilterExclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#exclude DevopsTrigger#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter.property.include"></a>

```python
include: DevopsTriggerActionsFilterInclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#include DevopsTrigger#include}

---

### DevopsTriggerActionsFilterExclude <a name="DevopsTriggerActionsFilterExclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterExclude(
  file_filter: DevopsTriggerActionsFilterExcludeFileFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude.property.fileFilter">file_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a></code> | file_filter block. |

---

##### `file_filter`<sup>Optional</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude.property.fileFilter"></a>

```python
file_filter: DevopsTriggerActionsFilterExcludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a>

file_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}

---

### DevopsTriggerActionsFilterExcludeFileFilter <a name="DevopsTriggerActionsFilterExcludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter(
  file_paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter.property.filePaths">file_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}. |

---

##### `file_paths`<sup>Optional</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter.property.filePaths"></a>

```python
file_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}.

---

### DevopsTriggerActionsFilterInclude <a name="DevopsTriggerActionsFilterInclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterInclude(
  base_ref: str = None,
  file_filter: DevopsTriggerActionsFilterIncludeFileFilter = None,
  head_ref: str = None,
  repository_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.baseRef">base_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#base_ref DevopsTrigger#base_ref}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.fileFilter">file_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a></code> | file_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.headRef">head_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#head_ref DevopsTrigger#head_ref}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_name DevopsTrigger#repository_name}. |

---

##### `base_ref`<sup>Optional</sup> <a name="base_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#base_ref DevopsTrigger#base_ref}.

---

##### `file_filter`<sup>Optional</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.fileFilter"></a>

```python
file_filter: DevopsTriggerActionsFilterIncludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a>

file_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}

---

##### `head_ref`<sup>Optional</sup> <a name="head_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#head_ref DevopsTrigger#head_ref}.

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_name DevopsTrigger#repository_name}.

---

### DevopsTriggerActionsFilterIncludeFileFilter <a name="DevopsTriggerActionsFilterIncludeFileFilter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter(
  file_paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter.property.filePaths">file_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}. |

---

##### `file_paths`<sup>Optional</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter.property.filePaths"></a>

```python
file_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}.

---

### DevopsTriggerConfig <a name="DevopsTriggerConfig" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  actions: typing.Union[IResolvable, typing.List[DevopsTriggerActions]],
  project_id: str,
  trigger_source: str,
  connection_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  repository_id: str = None,
  timeouts: DevopsTriggerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#project_id DevopsTrigger#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.triggerSource">trigger_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#connection_id DevopsTrigger#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#defined_tags DevopsTrigger#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#description DevopsTrigger#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#display_name DevopsTrigger#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#freeform_tags DevopsTrigger#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#id DevopsTrigger#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_id DevopsTrigger#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[DevopsTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#actions DevopsTrigger#actions}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#project_id DevopsTrigger#project_id}.

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#connection_id DevopsTrigger#connection_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#defined_tags DevopsTrigger#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#description DevopsTrigger#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#display_name DevopsTrigger#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#freeform_tags DevopsTrigger#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#id DevopsTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_id DevopsTrigger#repository_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerConfig.property.timeouts"></a>

```python
timeouts: DevopsTriggerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#timeouts DevopsTrigger#timeouts}

---

### DevopsTriggerTimeouts <a name="DevopsTriggerTimeouts" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#create DevopsTrigger#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#delete DevopsTrigger#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#update DevopsTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#create DevopsTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#delete DevopsTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#update DevopsTrigger#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsTriggerActionsFilterExcludeFileFilterOutputReference <a name="DevopsTriggerActionsFilterExcludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.resetFilePaths">reset_file_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_paths` <a name="reset_file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.resetFilePaths"></a>

```python
def reset_file_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.filePathsInput">file_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.filePaths">file_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_paths_input`<sup>Optional</sup> <a name="file_paths_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.filePathsInput"></a>

```python
file_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.filePaths"></a>

```python
file_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference.property.internalValue"></a>

```python
internal_value: DevopsTriggerActionsFilterExcludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a>

---


### DevopsTriggerActionsFilterExcludeOutputReference <a name="DevopsTriggerActionsFilterExcludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.putFileFilter">put_file_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.resetFileFilter">reset_file_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_filter` <a name="put_file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.putFileFilter"></a>

```python
def put_file_filter(
  file_paths: typing.List[str] = None
) -> None
```

###### `file_paths`<sup>Optional</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.putFileFilter.parameter.filePaths"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}.

---

##### `reset_file_filter` <a name="reset_file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.resetFileFilter"></a>

```python
def reset_file_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fileFilter">file_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference">DevopsTriggerActionsFilterExcludeFileFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fileFilterInput">file_filter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_filter`<sup>Required</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fileFilter"></a>

```python
file_filter: DevopsTriggerActionsFilterExcludeFileFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilterOutputReference">DevopsTriggerActionsFilterExcludeFileFilterOutputReference</a>

---

##### `file_filter_input`<sup>Optional</sup> <a name="file_filter_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.fileFilterInput"></a>

```python
file_filter_input: DevopsTriggerActionsFilterExcludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference.property.internalValue"></a>

```python
internal_value: DevopsTriggerActionsFilterExclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a>

---


### DevopsTriggerActionsFilterIncludeFileFilterOutputReference <a name="DevopsTriggerActionsFilterIncludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.resetFilePaths">reset_file_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_paths` <a name="reset_file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.resetFilePaths"></a>

```python
def reset_file_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.filePathsInput">file_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.filePaths">file_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_paths_input`<sup>Optional</sup> <a name="file_paths_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.filePathsInput"></a>

```python
file_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.filePaths"></a>

```python
file_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference.property.internalValue"></a>

```python
internal_value: DevopsTriggerActionsFilterIncludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a>

---


### DevopsTriggerActionsFilterIncludeOutputReference <a name="DevopsTriggerActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.putFileFilter">put_file_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetBaseRef">reset_base_ref</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetFileFilter">reset_file_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetHeadRef">reset_head_ref</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetRepositoryName">reset_repository_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_filter` <a name="put_file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.putFileFilter"></a>

```python
def put_file_filter(
  file_paths: typing.List[str] = None
) -> None
```

###### `file_paths`<sup>Optional</sup> <a name="file_paths" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.putFileFilter.parameter.filePaths"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_paths DevopsTrigger#file_paths}.

---

##### `reset_base_ref` <a name="reset_base_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetBaseRef"></a>

```python
def reset_base_ref() -> None
```

##### `reset_file_filter` <a name="reset_file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetFileFilter"></a>

```python
def reset_file_filter() -> None
```

##### `reset_head_ref` <a name="reset_head_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetHeadRef"></a>

```python
def reset_head_ref() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fileFilter">file_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference">DevopsTriggerActionsFilterIncludeFileFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.baseRefInput">base_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fileFilterInput">file_filter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.headRefInput">head_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.baseRef">base_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.headRef">head_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_filter`<sup>Required</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fileFilter"></a>

```python
file_filter: DevopsTriggerActionsFilterIncludeFileFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilterOutputReference">DevopsTriggerActionsFilterIncludeFileFilterOutputReference</a>

---

##### `base_ref_input`<sup>Optional</sup> <a name="base_ref_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.baseRefInput"></a>

```python
base_ref_input: str
```

- *Type:* str

---

##### `file_filter_input`<sup>Optional</sup> <a name="file_filter_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.fileFilterInput"></a>

```python
file_filter_input: DevopsTriggerActionsFilterIncludeFileFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a>

---

##### `head_ref_input`<sup>Optional</sup> <a name="head_ref_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.headRefInput"></a>

```python
head_ref_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `base_ref`<sup>Required</sup> <a name="base_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.baseRef"></a>

```python
base_ref: str
```

- *Type:* str

---

##### `head_ref`<sup>Required</sup> <a name="head_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.headRef"></a>

```python
head_ref: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference.property.internalValue"></a>

```python
internal_value: DevopsTriggerActionsFilterInclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a>

---


### DevopsTriggerActionsFilterOutputReference <a name="DevopsTriggerActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putExclude">put_exclude</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude">put_include</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclude` <a name="put_exclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putExclude"></a>

```python
def put_exclude(
  file_filter: DevopsTriggerActionsFilterExcludeFileFilter = None
) -> None
```

###### `file_filter`<sup>Optional</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putExclude.parameter.fileFilter"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeFileFilter">DevopsTriggerActionsFilterExcludeFileFilter</a>

file_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}

---

##### `put_include` <a name="put_include" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude"></a>

```python
def put_include(
  base_ref: str = None,
  file_filter: DevopsTriggerActionsFilterIncludeFileFilter = None,
  head_ref: str = None,
  repository_name: str = None
) -> None
```

###### `base_ref`<sup>Optional</sup> <a name="base_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude.parameter.baseRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#base_ref DevopsTrigger#base_ref}.

---

###### `file_filter`<sup>Optional</sup> <a name="file_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude.parameter.fileFilter"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeFileFilter">DevopsTriggerActionsFilterIncludeFileFilter</a>

file_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#file_filter DevopsTrigger#file_filter}

---

###### `head_ref`<sup>Optional</sup> <a name="head_ref" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude.parameter.headRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#head_ref DevopsTrigger#head_ref}.

---

###### `repository_name`<sup>Optional</sup> <a name="repository_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.putInclude.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#repository_name DevopsTrigger#repository_name}.

---

##### `reset_events` <a name="reset_events" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.exclude">exclude</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference">DevopsTriggerActionsFilterExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference">DevopsTriggerActionsFilterIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.excludeInput">exclude_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.includeInput">include_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.exclude"></a>

```python
exclude: DevopsTriggerActionsFilterExcludeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExcludeOutputReference">DevopsTriggerActionsFilterExcludeOutputReference</a>

---

##### `include`<sup>Required</sup> <a name="include" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.include"></a>

```python
include: DevopsTriggerActionsFilterIncludeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterIncludeOutputReference">DevopsTriggerActionsFilterIncludeOutputReference</a>

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.excludeInput"></a>

```python
exclude_input: DevopsTriggerActionsFilterExclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a>

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.includeInput"></a>

```python
include_input: DevopsTriggerActionsFilterInclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a>

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: DevopsTriggerActionsFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a>

---


### DevopsTriggerActionsList <a name="DevopsTriggerActionsList" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsTriggerActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]]

---


### DevopsTriggerActionsOutputReference <a name="DevopsTriggerActionsOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter"></a>

```python
def put_filter(
  trigger_source: str,
  events: typing.List[str] = None,
  exclude: DevopsTriggerActionsFilterExclude = None,
  include: DevopsTriggerActionsFilterInclude = None
) -> None
```

###### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter.parameter.triggerSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#trigger_source DevopsTrigger#trigger_source}.

---

###### `events`<sup>Optional</sup> <a name="events" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#events DevopsTrigger#events}.

---

###### `exclude`<sup>Optional</sup> <a name="exclude" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter.parameter.exclude"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterExclude">DevopsTriggerActionsFilterExclude</a>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#exclude DevopsTrigger#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.putFilter.parameter.include"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterInclude">DevopsTriggerActionsFilterInclude</a>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_trigger#include DevopsTrigger#include}

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference">DevopsTriggerActionsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.buildPipelineIdInput">build_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.buildPipelineId">build_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.filter"></a>

```python
filter: DevopsTriggerActionsFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilterOutputReference">DevopsTriggerActionsFilterOutputReference</a>

---

##### `build_pipeline_id_input`<sup>Optional</sup> <a name="build_pipeline_id_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.buildPipelineIdInput"></a>

```python
build_pipeline_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.filterInput"></a>

```python
filter_input: DevopsTriggerActionsFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsFilter">DevopsTriggerActionsFilter</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `build_pipeline_id`<sup>Required</sup> <a name="build_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.buildPipelineId"></a>

```python
build_pipeline_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsTriggerActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerActions">DevopsTriggerActions</a>]

---


### DevopsTriggerTimeoutsOutputReference <a name="DevopsTriggerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_trigger

devopsTrigger.DevopsTriggerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsTrigger.DevopsTriggerTimeouts">DevopsTriggerTimeouts</a>]

---



