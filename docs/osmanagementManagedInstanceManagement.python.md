# `osmanagementManagedInstanceManagement` Submodule <a name="`osmanagementManagedInstanceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstanceManagement <a name="OsmanagementManagedInstanceManagement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement(
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
  child_software_sources: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]] = None,
  id: str = None,
  managed_instance_groups: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]] = None,
  parent_software_source: OsmanagementManagedInstanceManagementParentSoftwareSource = None,
  timeouts: OsmanagementManagedInstanceManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.childSoftwareSources">child_software_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]</code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceGroups">managed_instance_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]</code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.parentSoftwareSource">parent_software_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `child_software_sources`<sup>Optional</sup> <a name="child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.childSoftwareSources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_groups`<sup>Optional</sup> <a name="managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `parent_software_source`<sup>Optional</sup> <a name="parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.parentSoftwareSource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources">put_child_software_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups">put_managed_instance_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource">put_parent_software_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources">reset_child_software_sources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups">reset_managed_instance_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource">reset_parent_software_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_child_software_sources` <a name="put_child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources"></a>

```python
def put_child_software_sources(
  value: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]

---

##### `put_managed_instance_groups` <a name="put_managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups"></a>

```python
def put_managed_instance_groups(
  value: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]

---

##### `put_parent_software_source` <a name="put_parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource"></a>

```python
def put_parent_software_source(
  id: str = None,
  name: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}.

---

##### `reset_child_software_sources` <a name="reset_child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources"></a>

```python
def reset_child_software_sources() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_instance_groups` <a name="reset_managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups"></a>

```python
def reset_managed_instance_groups() -> None
```

##### `reset_parent_software_source` <a name="reset_parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource"></a>

```python
def reset_parent_software_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsmanagementManagedInstanceManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsmanagementManagedInstanceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstanceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources">child_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot">last_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin">last_checkin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups">managed_instance_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion">os_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource">parent_software_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable">updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput">child_software_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput">managed_instance_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput">parent_software_source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `child_software_sources`<sup>Required</sup> <a name="child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources"></a>

```python
child_software_sources: OsmanagementManagedInstanceManagementChildSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_boot`<sup>Required</sup> <a name="last_boot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot"></a>

```python
last_boot: str
```

- *Type:* str

---

##### `last_checkin`<sup>Required</sup> <a name="last_checkin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin"></a>

```python
last_checkin: str
```

- *Type:* str

---

##### `managed_instance_groups`<sup>Required</sup> <a name="managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups"></a>

```python
managed_instance_groups: OsmanagementManagedInstanceManagementManagedInstanceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a>

---

##### `os_kernel_version`<sup>Required</sup> <a name="os_kernel_version" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion"></a>

```python
os_kernel_version: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `parent_software_source`<sup>Required</sup> <a name="parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource"></a>

```python
parent_software_source: OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts"></a>

```python
timeouts: OsmanagementManagedInstanceManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a>

---

##### `updates_available`<sup>Required</sup> <a name="updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable"></a>

```python
updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_software_sources_input`<sup>Optional</sup> <a name="child_software_sources_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput"></a>

```python
child_software_sources_input: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_groups_input`<sup>Optional</sup> <a name="managed_instance_groups_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput"></a>

```python
managed_instance_groups_input: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `parent_software_source_input`<sup>Optional</sup> <a name="parent_software_source_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput"></a>

```python
parent_software_source_input: OsmanagementManagedInstanceManagementParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsmanagementManagedInstanceManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSources <a name="OsmanagementManagedInstanceManagementChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources(
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementConfig <a name="OsmanagementManagedInstanceManagementConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  child_software_sources: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]] = None,
  id: str = None,
  managed_instance_groups: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]] = None,
  parent_software_source: OsmanagementManagedInstanceManagementParentSoftwareSource = None,
  timeouts: OsmanagementManagedInstanceManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources">child_software_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]</code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups">managed_instance_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]</code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource">parent_software_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `child_software_sources`<sup>Optional</sup> <a name="child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources"></a>

```python
child_software_sources: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_groups`<sup>Optional</sup> <a name="managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups"></a>

```python
managed_instance_groups: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `parent_software_source`<sup>Optional</sup> <a name="parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource"></a>

```python
parent_software_source: OsmanagementManagedInstanceManagementParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts"></a>

```python
timeouts: OsmanagementManagedInstanceManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

### OsmanagementManagedInstanceManagementManagedInstanceGroups <a name="OsmanagementManagedInstanceManagementManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups(
  display_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OsmanagementManagedInstanceManagementParentSoftwareSource <a name="OsmanagementManagedInstanceManagementParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource(
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementTimeouts <a name="OsmanagementManagedInstanceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSourcesList <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementChildSoftwareSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]]

---


### OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsmanagementManagedInstanceManagementChildSoftwareSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>]

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OsmanagementManagedInstanceManagementManagedInstanceGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]]

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsmanagementManagedInstanceManagementManagedInstanceGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>]

---


### OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementManagedInstanceManagementParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---


### OsmanagementManagedInstanceManagementTimeoutsOutputReference <a name="OsmanagementManagedInstanceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance_management

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsmanagementManagedInstanceManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>]

---



