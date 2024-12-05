# `devopsProjectRepositorySetting` Submodule <a name="`devopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsProjectRepositorySetting <a name="DevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  approval_rules: DevopsProjectRepositorySettingApprovalRules = None,
  id: str = None,
  merge_settings: DevopsProjectRepositorySettingMergeSettings = None,
  timeouts: DevopsProjectRepositorySettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.approvalRules">approval_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.mergeSettings">merge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.approvalRules"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_settings`<sup>Optional</sup> <a name="merge_settings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.mergeSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules">put_approval_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings">put_merge_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules">reset_approval_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings">reset_merge_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_rules` <a name="put_approval_rules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules"></a>

```python
def put_approval_rules(
  items: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putApprovalRules.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

##### `put_merge_settings` <a name="put_merge_settings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings"></a>

```python
def put_merge_settings(
  allowed_merge_strategies: typing.List[str],
  default_merge_strategy: str
) -> None
```

###### `allowed_merge_strategies`<sup>Required</sup> <a name="allowed_merge_strategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.allowedMergeStrategies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

###### `default_merge_strategy`<sup>Required</sup> <a name="default_merge_strategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putMergeSettings.parameter.defaultMergeStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

##### `reset_approval_rules` <a name="reset_approval_rules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetApprovalRules"></a>

```python
def reset_approval_rules() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_merge_settings` <a name="reset_merge_settings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetMergeSettings"></a>

```python
def reset_merge_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsProjectRepositorySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules">approval_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings">merge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput">approval_rules_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput">merge_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRules"></a>

```python
approval_rules: DevopsProjectRepositorySettingApprovalRulesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference">DevopsProjectRepositorySettingApprovalRulesOutputReference</a>

---

##### `merge_settings`<sup>Required</sup> <a name="merge_settings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettings"></a>

```python
merge_settings: DevopsProjectRepositorySettingMergeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference">DevopsProjectRepositorySettingMergeSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeouts"></a>

```python
timeouts: DevopsProjectRepositorySettingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference">DevopsProjectRepositorySettingTimeoutsOutputReference</a>

---

##### `approval_rules_input`<sup>Optional</sup> <a name="approval_rules_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.approvalRulesInput"></a>

```python
approval_rules_input: DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `merge_settings_input`<sup>Optional</sup> <a name="merge_settings_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.mergeSettingsInput"></a>

```python
merge_settings_input: DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevopsProjectRepositorySettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsProjectRepositorySettingApprovalRules <a name="DevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules(
  items: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}

---

### DevopsProjectRepositorySettingApprovalRulesItems <a name="DevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems(
  min_approvals_count: typing.Union[int, float],
  name: str,
  destination_branch: str = None,
  reviewers: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItemsReviewers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount">min_approvals_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch">destination_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers">reviewers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]</code> | reviewers block. |

---

##### `min_approvals_count`<sup>Required</sup> <a name="min_approvals_count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.minApprovalsCount"></a>

```python
min_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}.

---

##### `destination_branch`<sup>Optional</sup> <a name="destination_branch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.destinationBranch"></a>

```python
destination_branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems.property.reviewers"></a>

```python
reviewers: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItemsReviewers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}

---

### DevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers(
  principal_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}. |

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}.

---

### DevopsProjectRepositorySettingConfig <a name="DevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  approval_rules: DevopsProjectRepositorySettingApprovalRules = None,
  id: str = None,
  merge_settings: DevopsProjectRepositorySettingMergeSettings = None,
  timeouts: DevopsProjectRepositorySettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules">approval_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | approval_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings">merge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | merge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}.

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.approvalRules"></a>

```python
approval_rules: DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_settings`<sup>Optional</sup> <a name="merge_settings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.mergeSettings"></a>

```python
merge_settings: DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

merge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingConfig.property.timeouts"></a>

```python
timeouts: DevopsProjectRepositorySettingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}

---

### DevopsProjectRepositorySettingMergeSettings <a name="DevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings(
  allowed_merge_strategies: typing.List[str],
  default_merge_strategy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies">allowed_merge_strategies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy">default_merge_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}. |

---

##### `allowed_merge_strategies`<sup>Required</sup> <a name="allowed_merge_strategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.allowedMergeStrategies"></a>

```python
allowed_merge_strategies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}.

---

##### `default_merge_strategy`<sup>Required</sup> <a name="default_merge_strategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings.property.defaultMergeStrategy"></a>

```python
default_merge_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}.

---

### DevopsProjectRepositorySettingTimeouts <a name="DevopsProjectRepositorySettingTimeouts" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsProjectRepositorySettingApprovalRulesItemsList <a name="DevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsProjectRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]

---


### DevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers">put_reviewers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch">reset_destination_branch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers">reset_reviewers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_reviewers` <a name="put_reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers"></a>

```python
def put_reviewers(
  value: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItemsReviewers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.putReviewers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]

---

##### `reset_destination_branch` <a name="reset_destination_branch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetDestinationBranch"></a>

```python
def reset_destination_branch() -> None
```

##### `reset_reviewers` <a name="reset_reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resetReviewers"></a>

```python
def reset_reviewers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput">destination_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput">min_approvals_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput">reviewers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destination_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">min_approvals_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```python
reviewers: DevopsProjectRepositorySettingApprovalRulesItemsReviewersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `destination_branch_input`<sup>Optional</sup> <a name="destination_branch_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranchInput"></a>

```python
destination_branch_input: str
```

- *Type:* str

---

##### `min_approvals_count_input`<sup>Optional</sup> <a name="min_approvals_count_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCountInput"></a>

```python
min_approvals_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reviewers_input`<sup>Optional</sup> <a name="reviewers_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewersInput"></a>

```python
reviewers_input: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItemsReviewers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]

---

##### `destination_branch`<sup>Required</sup> <a name="destination_branch" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```python
destination_branch: str
```

- *Type:* str

---

##### `min_approvals_count`<sup>Required</sup> <a name="min_approvals_count" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```python
min_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsProjectRepositorySettingApprovalRulesItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItemsReviewers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]]

---


### DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principal_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `principal_state`<sup>Required</sup> <a name="principal_state" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```python
principal_state: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsProjectRepositorySettingApprovalRulesItemsReviewers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsReviewers">DevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>]

---


### DevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems">put_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```python
items: DevopsProjectRepositorySettingApprovalRulesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItemsList">DevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsProjectRepositorySettingApprovalRulesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesItems">DevopsProjectRepositorySettingApprovalRulesItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: DevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingApprovalRules">DevopsProjectRepositorySettingApprovalRules</a>

---


### DevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput">allowed_merge_strategies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput">default_merge_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowed_merge_strategies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">default_merge_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_merge_strategies_input`<sup>Optional</sup> <a name="allowed_merge_strategies_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategiesInput"></a>

```python
allowed_merge_strategies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_merge_strategy_input`<sup>Optional</sup> <a name="default_merge_strategy_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategyInput"></a>

```python
default_merge_strategy_input: str
```

- *Type:* str

---

##### `allowed_merge_strategies`<sup>Required</sup> <a name="allowed_merge_strategies" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```python
allowed_merge_strategies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_merge_strategy`<sup>Required</sup> <a name="default_merge_strategy" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```python
default_merge_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingMergeSettings">DevopsProjectRepositorySettingMergeSettings</a>

---


### DevopsProjectRepositorySettingTimeoutsOutputReference <a name="DevopsProjectRepositorySettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_project_repository_setting

devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsProjectRepositorySettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsProjectRepositorySetting.DevopsProjectRepositorySettingTimeouts">DevopsProjectRepositorySettingTimeouts</a>]

---



