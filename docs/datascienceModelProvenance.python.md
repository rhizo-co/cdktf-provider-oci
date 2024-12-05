# `datascienceModelProvenance` Submodule <a name="`datascienceModelProvenance` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelProvenance <a name="DatascienceModelProvenance" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance oci_datascience_model_provenance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_id: str,
  git_branch: str = None,
  git_commit: str = None,
  id: str = None,
  repository_url: str = None,
  script_dir: str = None,
  timeouts: DatascienceModelProvenanceTimeouts = None,
  training_id: str = None,
  training_script: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#model_id DatascienceModelProvenance#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.gitBranch">git_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_branch DatascienceModelProvenance#git_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.gitCommit">git_commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_commit DatascienceModelProvenance#git_commit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#id DatascienceModelProvenance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#repository_url DatascienceModelProvenance#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.scriptDir">script_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#script_dir DatascienceModelProvenance#script_dir}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.trainingId">training_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_id DatascienceModelProvenance#training_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.trainingScript">training_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_script DatascienceModelProvenance#training_script}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#model_id DatascienceModelProvenance#model_id}.

---

##### `git_branch`<sup>Optional</sup> <a name="git_branch" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.gitBranch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_branch DatascienceModelProvenance#git_branch}.

---

##### `git_commit`<sup>Optional</sup> <a name="git_commit" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.gitCommit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_commit DatascienceModelProvenance#git_commit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#id DatascienceModelProvenance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.repositoryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#repository_url DatascienceModelProvenance#repository_url}.

---

##### `script_dir`<sup>Optional</sup> <a name="script_dir" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.scriptDir"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#script_dir DatascienceModelProvenance#script_dir}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#timeouts DatascienceModelProvenance#timeouts}

---

##### `training_id`<sup>Optional</sup> <a name="training_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.trainingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_id DatascienceModelProvenance#training_id}.

---

##### `training_script`<sup>Optional</sup> <a name="training_script" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.Initializer.parameter.trainingScript"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_script DatascienceModelProvenance#training_script}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetGitBranch">reset_git_branch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetGitCommit">reset_git_commit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetRepositoryUrl">reset_repository_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetScriptDir">reset_script_dir</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTrainingId">reset_training_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTrainingScript">reset_training_script</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#create DatascienceModelProvenance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#delete DatascienceModelProvenance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#update DatascienceModelProvenance#update}.

---

##### `reset_git_branch` <a name="reset_git_branch" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetGitBranch"></a>

```python
def reset_git_branch() -> None
```

##### `reset_git_commit` <a name="reset_git_commit" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetGitCommit"></a>

```python
def reset_git_commit() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repository_url` <a name="reset_repository_url" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetRepositoryUrl"></a>

```python
def reset_repository_url() -> None
```

##### `reset_script_dir` <a name="reset_script_dir" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetScriptDir"></a>

```python
def reset_script_dir() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_training_id` <a name="reset_training_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTrainingId"></a>

```python
def reset_training_id() -> None
```

##### `reset_training_script` <a name="reset_training_script" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.resetTrainingScript"></a>

```python
def reset_training_script() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatascienceModelProvenance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatascienceModelProvenance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatascienceModelProvenance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatascienceModelProvenance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelProvenance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference">DatascienceModelProvenanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitBranchInput">git_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitCommitInput">git_commit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.scriptDirInput">script_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingIdInput">training_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingScriptInput">training_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitBranch">git_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitCommit">git_commit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.scriptDir">script_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingId">training_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingScript">training_script</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.timeouts"></a>

```python
timeouts: DatascienceModelProvenanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference">DatascienceModelProvenanceTimeoutsOutputReference</a>

---

##### `git_branch_input`<sup>Optional</sup> <a name="git_branch_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitBranchInput"></a>

```python
git_branch_input: str
```

- *Type:* str

---

##### `git_commit_input`<sup>Optional</sup> <a name="git_commit_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitCommitInput"></a>

```python
git_commit_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `script_dir_input`<sup>Optional</sup> <a name="script_dir_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.scriptDirInput"></a>

```python
script_dir_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatascienceModelProvenanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>]

---

##### `training_id_input`<sup>Optional</sup> <a name="training_id_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingIdInput"></a>

```python
training_id_input: str
```

- *Type:* str

---

##### `training_script_input`<sup>Optional</sup> <a name="training_script_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingScriptInput"></a>

```python
training_script_input: str
```

- *Type:* str

---

##### `git_branch`<sup>Required</sup> <a name="git_branch" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitBranch"></a>

```python
git_branch: str
```

- *Type:* str

---

##### `git_commit`<sup>Required</sup> <a name="git_commit" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.gitCommit"></a>

```python
git_commit: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `script_dir`<sup>Required</sup> <a name="script_dir" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.scriptDir"></a>

```python
script_dir: str
```

- *Type:* str

---

##### `training_id`<sup>Required</sup> <a name="training_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingId"></a>

```python
training_id: str
```

- *Type:* str

---

##### `training_script`<sup>Required</sup> <a name="training_script" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.trainingScript"></a>

```python
training_script: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelProvenanceConfig <a name="DatascienceModelProvenanceConfig" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  model_id: str,
  git_branch: str = None,
  git_commit: str = None,
  id: str = None,
  repository_url: str = None,
  script_dir: str = None,
  timeouts: DatascienceModelProvenanceTimeouts = None,
  training_id: str = None,
  training_script: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#model_id DatascienceModelProvenance#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.gitBranch">git_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_branch DatascienceModelProvenance#git_branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.gitCommit">git_commit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_commit DatascienceModelProvenance#git_commit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#id DatascienceModelProvenance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#repository_url DatascienceModelProvenance#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.scriptDir">script_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#script_dir DatascienceModelProvenance#script_dir}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.trainingId">training_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_id DatascienceModelProvenance#training_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.trainingScript">training_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_script DatascienceModelProvenance#training_script}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#model_id DatascienceModelProvenance#model_id}.

---

##### `git_branch`<sup>Optional</sup> <a name="git_branch" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.gitBranch"></a>

```python
git_branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_branch DatascienceModelProvenance#git_branch}.

---

##### `git_commit`<sup>Optional</sup> <a name="git_commit" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.gitCommit"></a>

```python
git_commit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#git_commit DatascienceModelProvenance#git_commit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#id DatascienceModelProvenance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#repository_url DatascienceModelProvenance#repository_url}.

---

##### `script_dir`<sup>Optional</sup> <a name="script_dir" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.scriptDir"></a>

```python
script_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#script_dir DatascienceModelProvenance#script_dir}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.timeouts"></a>

```python
timeouts: DatascienceModelProvenanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#timeouts DatascienceModelProvenance#timeouts}

---

##### `training_id`<sup>Optional</sup> <a name="training_id" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.trainingId"></a>

```python
training_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_id DatascienceModelProvenance#training_id}.

---

##### `training_script`<sup>Optional</sup> <a name="training_script" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceConfig.property.trainingScript"></a>

```python
training_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#training_script DatascienceModelProvenance#training_script}.

---

### DatascienceModelProvenanceTimeouts <a name="DatascienceModelProvenanceTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#create DatascienceModelProvenance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#delete DatascienceModelProvenance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#update DatascienceModelProvenance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#create DatascienceModelProvenance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#delete DatascienceModelProvenance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_provenance#update DatascienceModelProvenance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelProvenanceTimeoutsOutputReference <a name="DatascienceModelProvenanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_provenance

datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceModelProvenanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelProvenance.DatascienceModelProvenanceTimeouts">DatascienceModelProvenanceTimeouts</a>]

---



