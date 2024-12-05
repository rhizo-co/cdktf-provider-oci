# `devopsDeployArtifact` Submodule <a name="`devopsDeployArtifact` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployArtifact <a name="DevopsDeployArtifact" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  argument_substitution_mode: str,
  deploy_artifact_source: DevopsDeployArtifactDeployArtifactSource,
  deploy_artifact_type: str,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DevopsDeployArtifactTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.argumentSubstitutionMode">argument_substitution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactSource">deploy_artifact_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactType">deploy_artifact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `argument_substitution_mode`<sup>Required</sup> <a name="argument_substitution_mode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.argumentSubstitutionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `deploy_artifact_source`<sup>Required</sup> <a name="deploy_artifact_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactSource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `deploy_artifact_type`<sup>Required</sup> <a name="deploy_artifact_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.deployArtifactType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource">put_deploy_artifact_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deploy_artifact_source` <a name="put_deploy_artifact_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource"></a>

```python
def put_deploy_artifact_source(
  deploy_artifact_source_type: str,
  base64_encoded_content: str = None,
  chart_url: str = None,
  deploy_artifact_path: str = None,
  deploy_artifact_version: str = None,
  helm_artifact_source_type: str = None,
  helm_verification_key_source: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource = None,
  image_digest: str = None,
  image_uri: str = None,
  repository_id: str = None
) -> None
```

###### `deploy_artifact_source_type`<sup>Required</sup> <a name="deploy_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.deployArtifactSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}.

---

###### `base64_encoded_content`<sup>Optional</sup> <a name="base64_encoded_content" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.base64EncodedContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}.

---

###### `chart_url`<sup>Optional</sup> <a name="chart_url" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.chartUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}.

---

###### `deploy_artifact_path`<sup>Optional</sup> <a name="deploy_artifact_path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.deployArtifactPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}.

---

###### `deploy_artifact_version`<sup>Optional</sup> <a name="deploy_artifact_version" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.deployArtifactVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}.

---

###### `helm_artifact_source_type`<sup>Optional</sup> <a name="helm_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.helmArtifactSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}.

---

###### `helm_verification_key_source`<sup>Optional</sup> <a name="helm_verification_key_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.helmVerificationKeySource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

helm_verification_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}

---

###### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.imageDigest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}.

---

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.imageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}.

---

###### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsDeployArtifact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsDeployArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource">deploy_artifact_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput">argument_substitution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput">deploy_artifact_source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput">deploy_artifact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode">argument_substitution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType">deploy_artifact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `deploy_artifact_source`<sup>Required</sup> <a name="deploy_artifact_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource"></a>

```python
deploy_artifact_source: DevopsDeployArtifactDeployArtifactSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts"></a>

```python
timeouts: DevopsDeployArtifactTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `argument_substitution_mode_input`<sup>Optional</sup> <a name="argument_substitution_mode_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput"></a>

```python
argument_substitution_mode_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_artifact_source_input`<sup>Optional</sup> <a name="deploy_artifact_source_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput"></a>

```python
deploy_artifact_source_input: DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `deploy_artifact_type_input`<sup>Optional</sup> <a name="deploy_artifact_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput"></a>

```python
deploy_artifact_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevopsDeployArtifactTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>]

---

##### `argument_substitution_mode`<sup>Required</sup> <a name="argument_substitution_mode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode"></a>

```python
argument_substitution_mode: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_artifact_type`<sup>Required</sup> <a name="deploy_artifact_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType"></a>

```python
deploy_artifact_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployArtifactConfig <a name="DevopsDeployArtifactConfig" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  argument_substitution_mode: str,
  deploy_artifact_source: DevopsDeployArtifactDeployArtifactSource,
  deploy_artifact_type: str,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DevopsDeployArtifactTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode">argument_substitution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource">deploy_artifact_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType">deploy_artifact_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `argument_substitution_mode`<sup>Required</sup> <a name="argument_substitution_mode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode"></a>

```python
argument_substitution_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `deploy_artifact_source`<sup>Required</sup> <a name="deploy_artifact_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource"></a>

```python
deploy_artifact_source: DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `deploy_artifact_type`<sup>Required</sup> <a name="deploy_artifact_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType"></a>

```python
deploy_artifact_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts"></a>

```python
timeouts: DevopsDeployArtifactTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

### DevopsDeployArtifactDeployArtifactSource <a name="DevopsDeployArtifactDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource(
  deploy_artifact_source_type: str,
  base64_encoded_content: str = None,
  chart_url: str = None,
  deploy_artifact_path: str = None,
  deploy_artifact_version: str = None,
  helm_artifact_source_type: str = None,
  helm_verification_key_source: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource = None,
  image_digest: str = None,
  image_uri: str = None,
  repository_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType">deploy_artifact_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent">base64_encoded_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl">chart_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath">deploy_artifact_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion">deploy_artifact_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType">helm_artifact_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource">helm_verification_key_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | helm_verification_key_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}. |

---

##### `deploy_artifact_source_type`<sup>Required</sup> <a name="deploy_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType"></a>

```python
deploy_artifact_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}.

---

##### `base64_encoded_content`<sup>Optional</sup> <a name="base64_encoded_content" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent"></a>

```python
base64_encoded_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}.

---

##### `chart_url`<sup>Optional</sup> <a name="chart_url" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl"></a>

```python
chart_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}.

---

##### `deploy_artifact_path`<sup>Optional</sup> <a name="deploy_artifact_path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath"></a>

```python
deploy_artifact_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}.

---

##### `deploy_artifact_version`<sup>Optional</sup> <a name="deploy_artifact_version" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion"></a>

```python
deploy_artifact_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}.

---

##### `helm_artifact_source_type`<sup>Optional</sup> <a name="helm_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType"></a>

```python
helm_artifact_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}.

---

##### `helm_verification_key_source`<sup>Optional</sup> <a name="helm_verification_key_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource"></a>

```python
helm_verification_key_source: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

helm_verification_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}.

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}.

---

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource(
  verification_key_source_type: str,
  current_public_key: str = None,
  previous_public_key: str = None,
  vault_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType">verification_key_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey">current_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey">previous_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}. |

---

##### `verification_key_source_type`<sup>Required</sup> <a name="verification_key_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType"></a>

```python
verification_key_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}.

---

##### `current_public_key`<sup>Optional</sup> <a name="current_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey"></a>

```python
current_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}.

---

##### `previous_public_key`<sup>Optional</sup> <a name="previous_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey"></a>

```python
previous_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}.

---

##### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}.

---

### DevopsDeployArtifactTimeouts <a name="DevopsDeployArtifactTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey">reset_current_public_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey">reset_previous_public_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId">reset_vault_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_current_public_key` <a name="reset_current_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey"></a>

```python
def reset_current_public_key() -> None
```

##### `reset_previous_public_key` <a name="reset_previous_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey"></a>

```python
def reset_previous_public_key() -> None
```

##### `reset_vault_secret_id` <a name="reset_vault_secret_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId"></a>

```python
def reset_vault_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput">current_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput">previous_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput">vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput">verification_key_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">current_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">previous_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">verification_key_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_public_key_input`<sup>Optional</sup> <a name="current_public_key_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput"></a>

```python
current_public_key_input: str
```

- *Type:* str

---

##### `previous_public_key_input`<sup>Optional</sup> <a name="previous_public_key_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput"></a>

```python
previous_public_key_input: str
```

- *Type:* str

---

##### `vault_secret_id_input`<sup>Optional</sup> <a name="vault_secret_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput"></a>

```python
vault_secret_id_input: str
```

- *Type:* str

---

##### `verification_key_source_type_input`<sup>Optional</sup> <a name="verification_key_source_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput"></a>

```python
verification_key_source_type_input: str
```

- *Type:* str

---

##### `current_public_key`<sup>Required</sup> <a name="current_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```python
current_public_key: str
```

- *Type:* str

---

##### `previous_public_key`<sup>Required</sup> <a name="previous_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```python
previous_public_key: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `verification_key_source_type`<sup>Required</sup> <a name="verification_key_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```python
verification_key_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---


### DevopsDeployArtifactDeployArtifactSourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource">put_helm_verification_key_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent">reset_base64_encoded_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl">reset_chart_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath">reset_deploy_artifact_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion">reset_deploy_artifact_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType">reset_helm_artifact_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource">reset_helm_verification_key_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest">reset_image_digest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId">reset_repository_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_helm_verification_key_source` <a name="put_helm_verification_key_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource"></a>

```python
def put_helm_verification_key_source(
  verification_key_source_type: str,
  current_public_key: str = None,
  previous_public_key: str = None,
  vault_secret_id: str = None
) -> None
```

###### `verification_key_source_type`<sup>Required</sup> <a name="verification_key_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.verificationKeySourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}.

---

###### `current_public_key`<sup>Optional</sup> <a name="current_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.currentPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}.

---

###### `previous_public_key`<sup>Optional</sup> <a name="previous_public_key" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.previousPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}.

---

###### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.vaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}.

---

##### `reset_base64_encoded_content` <a name="reset_base64_encoded_content" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent"></a>

```python
def reset_base64_encoded_content() -> None
```

##### `reset_chart_url` <a name="reset_chart_url" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl"></a>

```python
def reset_chart_url() -> None
```

##### `reset_deploy_artifact_path` <a name="reset_deploy_artifact_path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath"></a>

```python
def reset_deploy_artifact_path() -> None
```

##### `reset_deploy_artifact_version` <a name="reset_deploy_artifact_version" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion"></a>

```python
def reset_deploy_artifact_version() -> None
```

##### `reset_helm_artifact_source_type` <a name="reset_helm_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType"></a>

```python
def reset_helm_artifact_source_type() -> None
```

##### `reset_helm_verification_key_source` <a name="reset_helm_verification_key_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource"></a>

```python
def reset_helm_verification_key_source() -> None
```

##### `reset_image_digest` <a name="reset_image_digest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest"></a>

```python
def reset_image_digest() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource">helm_verification_key_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput">base64_encoded_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput">chart_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput">deploy_artifact_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput">deploy_artifact_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput">deploy_artifact_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput">helm_artifact_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput">helm_verification_key_source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput">image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent">base64_encoded_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl">chart_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath">deploy_artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType">deploy_artifact_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion">deploy_artifact_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType">helm_artifact_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `helm_verification_key_source`<sup>Required</sup> <a name="helm_verification_key_source" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```python
helm_verification_key_source: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a>

---

##### `base64_encoded_content_input`<sup>Optional</sup> <a name="base64_encoded_content_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput"></a>

```python
base64_encoded_content_input: str
```

- *Type:* str

---

##### `chart_url_input`<sup>Optional</sup> <a name="chart_url_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput"></a>

```python
chart_url_input: str
```

- *Type:* str

---

##### `deploy_artifact_path_input`<sup>Optional</sup> <a name="deploy_artifact_path_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput"></a>

```python
deploy_artifact_path_input: str
```

- *Type:* str

---

##### `deploy_artifact_source_type_input`<sup>Optional</sup> <a name="deploy_artifact_source_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput"></a>

```python
deploy_artifact_source_type_input: str
```

- *Type:* str

---

##### `deploy_artifact_version_input`<sup>Optional</sup> <a name="deploy_artifact_version_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput"></a>

```python
deploy_artifact_version_input: str
```

- *Type:* str

---

##### `helm_artifact_source_type_input`<sup>Optional</sup> <a name="helm_artifact_source_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput"></a>

```python
helm_artifact_source_type_input: str
```

- *Type:* str

---

##### `helm_verification_key_source_input`<sup>Optional</sup> <a name="helm_verification_key_source_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput"></a>

```python
helm_verification_key_source_input: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `image_digest_input`<sup>Optional</sup> <a name="image_digest_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput"></a>

```python
image_digest_input: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `base64_encoded_content`<sup>Required</sup> <a name="base64_encoded_content" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```python
base64_encoded_content: str
```

- *Type:* str

---

##### `chart_url`<sup>Required</sup> <a name="chart_url" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl"></a>

```python
chart_url: str
```

- *Type:* str

---

##### `deploy_artifact_path`<sup>Required</sup> <a name="deploy_artifact_path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```python
deploy_artifact_path: str
```

- *Type:* str

---

##### `deploy_artifact_source_type`<sup>Required</sup> <a name="deploy_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```python
deploy_artifact_source_type: str
```

- *Type:* str

---

##### `deploy_artifact_version`<sup>Required</sup> <a name="deploy_artifact_version" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```python
deploy_artifact_version: str
```

- *Type:* str

---

##### `helm_artifact_source_type`<sup>Required</sup> <a name="helm_artifact_source_type" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```python
helm_artifact_source_type: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---


### DevopsDeployArtifactTimeoutsOutputReference <a name="DevopsDeployArtifactTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_artifact

devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsDeployArtifactTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>]

---



