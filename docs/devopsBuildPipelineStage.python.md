# `devopsBuildPipelineStage` Submodule <a name="`devopsBuildPipelineStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsBuildPipelineStage <a name="DevopsBuildPipelineStage" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  build_pipeline_id: str,
  build_pipeline_stage_predecessor_collection: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection,
  build_pipeline_stage_type: str,
  build_runner_shape_config: DevopsBuildPipelineStageBuildRunnerShapeConfig = None,
  build_source_collection: DevopsBuildPipelineStageBuildSourceCollection = None,
  build_spec_file: str = None,
  defined_tags: typing.Mapping[str] = None,
  deliver_artifact_collection: DevopsBuildPipelineStageDeliverArtifactCollection = None,
  deploy_pipeline_id: str = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  image: str = None,
  is_pass_all_parameters_enabled: typing.Union[bool, IResolvable] = None,
  primary_build_source: str = None,
  private_access_config: DevopsBuildPipelineStagePrivateAccessConfig = None,
  stage_execution_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: DevopsBuildPipelineStageTimeouts = None,
  wait_criteria: DevopsBuildPipelineStageWaitCriteria = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineId">build_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStagePredecessorCollection">build_pipeline_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | build_pipeline_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStageType">build_pipeline_stage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildRunnerShapeConfig">build_runner_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | build_runner_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSourceCollection">build_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | build_source_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSpecFile">build_spec_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deliverArtifactCollection">deliver_artifact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | deliver_artifact_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.isPassAllParametersEnabled">is_pass_all_parameters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.primaryBuildSource">primary_build_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.privateAccessConfig">private_access_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | private_access_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.stageExecutionTimeoutInSeconds">stage_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_pipeline_id`<sup>Required</sup> <a name="build_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}.

---

##### `build_pipeline_stage_predecessor_collection`<sup>Required</sup> <a name="build_pipeline_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStagePredecessorCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

build_pipeline_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}

---

##### `build_pipeline_stage_type`<sup>Required</sup> <a name="build_pipeline_stage_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}.

---

##### `build_runner_shape_config`<sup>Optional</sup> <a name="build_runner_shape_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildRunnerShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

build_runner_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}

---

##### `build_source_collection`<sup>Optional</sup> <a name="build_source_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSourceCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

build_source_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}

---

##### `build_spec_file`<sup>Optional</sup> <a name="build_spec_file" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSpecFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}.

---

##### `deliver_artifact_collection`<sup>Optional</sup> <a name="deliver_artifact_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deliverArtifactCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

deliver_artifact_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}

---

##### `deploy_pipeline_id`<sup>Optional</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deployPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}.

---

##### `is_pass_all_parameters_enabled`<sup>Optional</sup> <a name="is_pass_all_parameters_enabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.isPassAllParametersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}.

---

##### `primary_build_source`<sup>Optional</sup> <a name="primary_build_source" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.primaryBuildSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}.

---

##### `private_access_config`<sup>Optional</sup> <a name="private_access_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.privateAccessConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

private_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}

---

##### `stage_execution_timeout_in_seconds`<sup>Optional</sup> <a name="stage_execution_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.stageExecutionTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}

---

##### `wait_criteria`<sup>Optional</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.waitCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection">put_build_pipeline_stage_predecessor_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig">put_build_runner_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection">put_build_source_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection">put_deliver_artifact_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig">put_private_access_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria">put_wait_criteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig">reset_build_runner_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection">reset_build_source_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile">reset_build_spec_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection">reset_deliver_artifact_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId">reset_deploy_pipeline_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled">reset_is_pass_all_parameters_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource">reset_primary_build_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig">reset_private_access_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds">reset_stage_execution_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria">reset_wait_criteria</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_build_pipeline_stage_predecessor_collection` <a name="put_build_pipeline_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection"></a>

```python
def put_build_pipeline_stage_predecessor_collection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

##### `put_build_runner_shape_config` <a name="put_build_runner_shape_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig"></a>

```python
def put_build_runner_shape_config(
  build_runner_type: str,
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `build_runner_type`<sup>Required</sup> <a name="build_runner_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig.parameter.buildRunnerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}.

---

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}.

---

##### `put_build_source_collection` <a name="put_build_source_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection"></a>

```python
def put_build_source_collection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

##### `put_deliver_artifact_collection` <a name="put_deliver_artifact_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection"></a>

```python
def put_deliver_artifact_collection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

##### `put_private_access_config` <a name="put_private_access_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig"></a>

```python
def put_private_access_config(
  network_channel_type: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig.parameter.networkChannelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}.

---

##### `put_wait_criteria` <a name="put_wait_criteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria"></a>

```python
def put_wait_criteria(
  wait_duration: str,
  wait_type: str
) -> None
```

###### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria.parameter.waitDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}.

---

###### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria.parameter.waitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}.

---

##### `reset_build_runner_shape_config` <a name="reset_build_runner_shape_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig"></a>

```python
def reset_build_runner_shape_config() -> None
```

##### `reset_build_source_collection` <a name="reset_build_source_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection"></a>

```python
def reset_build_source_collection() -> None
```

##### `reset_build_spec_file` <a name="reset_build_spec_file" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile"></a>

```python
def reset_build_spec_file() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deliver_artifact_collection` <a name="reset_deliver_artifact_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection"></a>

```python
def reset_deliver_artifact_collection() -> None
```

##### `reset_deploy_pipeline_id` <a name="reset_deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId"></a>

```python
def reset_deploy_pipeline_id() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_is_pass_all_parameters_enabled` <a name="reset_is_pass_all_parameters_enabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled"></a>

```python
def reset_is_pass_all_parameters_enabled() -> None
```

##### `reset_primary_build_source` <a name="reset_primary_build_source" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource"></a>

```python
def reset_primary_build_source() -> None
```

##### `reset_private_access_config` <a name="reset_private_access_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig"></a>

```python
def reset_private_access_config() -> None
```

##### `reset_stage_execution_timeout_in_seconds` <a name="reset_stage_execution_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds"></a>

```python
def reset_stage_execution_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_criteria` <a name="reset_wait_criteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria"></a>

```python
def reset_wait_criteria() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsBuildPipelineStage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsBuildPipelineStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsBuildPipelineStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection">build_pipeline_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig">build_runner_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection">build_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection">deliver_artifact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig">private_access_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput">build_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput">build_pipeline_stage_predecessor_collection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput">build_pipeline_stage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput">build_runner_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput">build_source_collection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput">build_spec_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput">deliver_artifact_collection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput">deploy_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput">is_pass_all_parameters_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput">primary_build_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput">private_access_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput">stage_execution_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput">wait_criteria_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId">build_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType">build_pipeline_stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile">build_spec_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled">is_pass_all_parameters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource">primary_build_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds">stage_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_pipeline_stage_predecessor_collection`<sup>Required</sup> <a name="build_pipeline_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection"></a>

```python
build_pipeline_stage_predecessor_collection: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a>

---

##### `build_runner_shape_config`<sup>Required</sup> <a name="build_runner_shape_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig"></a>

```python
build_runner_shape_config: DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a>

---

##### `build_source_collection`<sup>Required</sup> <a name="build_source_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection"></a>

```python
build_source_collection: DevopsBuildPipelineStageBuildSourceCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `deliver_artifact_collection`<sup>Required</sup> <a name="deliver_artifact_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection"></a>

```python
deliver_artifact_collection: DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `private_access_config`<sup>Required</sup> <a name="private_access_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig"></a>

```python
private_access_config: DevopsBuildPipelineStagePrivateAccessConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts"></a>

```python
timeouts: DevopsBuildPipelineStageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `wait_criteria`<sup>Required</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria"></a>

```python
wait_criteria: DevopsBuildPipelineStageWaitCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a>

---

##### `build_pipeline_id_input`<sup>Optional</sup> <a name="build_pipeline_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput"></a>

```python
build_pipeline_id_input: str
```

- *Type:* str

---

##### `build_pipeline_stage_predecessor_collection_input`<sup>Optional</sup> <a name="build_pipeline_stage_predecessor_collection_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput"></a>

```python
build_pipeline_stage_predecessor_collection_input: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---

##### `build_pipeline_stage_type_input`<sup>Optional</sup> <a name="build_pipeline_stage_type_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput"></a>

```python
build_pipeline_stage_type_input: str
```

- *Type:* str

---

##### `build_runner_shape_config_input`<sup>Optional</sup> <a name="build_runner_shape_config_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput"></a>

```python
build_runner_shape_config_input: DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---

##### `build_source_collection_input`<sup>Optional</sup> <a name="build_source_collection_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput"></a>

```python
build_source_collection_input: DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---

##### `build_spec_file_input`<sup>Optional</sup> <a name="build_spec_file_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput"></a>

```python
build_spec_file_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deliver_artifact_collection_input`<sup>Optional</sup> <a name="deliver_artifact_collection_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput"></a>

```python
deliver_artifact_collection_input: DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---

##### `deploy_pipeline_id_input`<sup>Optional</sup> <a name="deploy_pipeline_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput"></a>

```python
deploy_pipeline_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `is_pass_all_parameters_enabled_input`<sup>Optional</sup> <a name="is_pass_all_parameters_enabled_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput"></a>

```python
is_pass_all_parameters_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_build_source_input`<sup>Optional</sup> <a name="primary_build_source_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput"></a>

```python
primary_build_source_input: str
```

- *Type:* str

---

##### `private_access_config_input`<sup>Optional</sup> <a name="private_access_config_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput"></a>

```python
private_access_config_input: DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---

##### `stage_execution_timeout_in_seconds_input`<sup>Optional</sup> <a name="stage_execution_timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput"></a>

```python
stage_execution_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevopsBuildPipelineStageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>]

---

##### `wait_criteria_input`<sup>Optional</sup> <a name="wait_criteria_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput"></a>

```python
wait_criteria_input: DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---

##### `build_pipeline_id`<sup>Required</sup> <a name="build_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId"></a>

```python
build_pipeline_id: str
```

- *Type:* str

---

##### `build_pipeline_stage_type`<sup>Required</sup> <a name="build_pipeline_stage_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType"></a>

```python
build_pipeline_stage_type: str
```

- *Type:* str

---

##### `build_spec_file`<sup>Required</sup> <a name="build_spec_file" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile"></a>

```python
build_spec_file: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `is_pass_all_parameters_enabled`<sup>Required</sup> <a name="is_pass_all_parameters_enabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled"></a>

```python
is_pass_all_parameters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_build_source`<sup>Required</sup> <a name="primary_build_source" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource"></a>

```python
primary_build_source: str
```

- *Type:* str

---

##### `stage_execution_timeout_in_seconds`<sup>Required</sup> <a name="stage_execution_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds"></a>

```python
stage_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsBuildPipelineStageBuildRunnerShapeConfig <a name="DevopsBuildPipelineStageBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig(
  build_runner_type: str,
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType">build_runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}. |

---

##### `build_runner_type`<sup>Required</sup> <a name="build_runner_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType"></a>

```python
build_runner_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}.

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}.

---

### DevopsBuildPipelineStageBuildSourceCollection <a name="DevopsBuildPipelineStageBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildSourceCollectionItems <a name="DevopsBuildPipelineStageBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems(
  connection_type: str,
  branch: str = None,
  connection_id: str = None,
  name: str = None,
  repository_id: str = None,
  repository_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl">repository_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}. |

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}.

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}.

---

##### `repository_url`<sup>Optional</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}.

---

### DevopsBuildPipelineStageConfig <a name="DevopsBuildPipelineStageConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  build_pipeline_id: str,
  build_pipeline_stage_predecessor_collection: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection,
  build_pipeline_stage_type: str,
  build_runner_shape_config: DevopsBuildPipelineStageBuildRunnerShapeConfig = None,
  build_source_collection: DevopsBuildPipelineStageBuildSourceCollection = None,
  build_spec_file: str = None,
  defined_tags: typing.Mapping[str] = None,
  deliver_artifact_collection: DevopsBuildPipelineStageDeliverArtifactCollection = None,
  deploy_pipeline_id: str = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  image: str = None,
  is_pass_all_parameters_enabled: typing.Union[bool, IResolvable] = None,
  primary_build_source: str = None,
  private_access_config: DevopsBuildPipelineStagePrivateAccessConfig = None,
  stage_execution_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: DevopsBuildPipelineStageTimeouts = None,
  wait_criteria: DevopsBuildPipelineStageWaitCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId">build_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection">build_pipeline_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | build_pipeline_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType">build_pipeline_stage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig">build_runner_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | build_runner_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection">build_source_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | build_source_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile">build_spec_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection">deliver_artifact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | deliver_artifact_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled">is_pass_all_parameters_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource">primary_build_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig">private_access_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | private_access_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds">stage_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_pipeline_id`<sup>Required</sup> <a name="build_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId"></a>

```python
build_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}.

---

##### `build_pipeline_stage_predecessor_collection`<sup>Required</sup> <a name="build_pipeline_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection"></a>

```python
build_pipeline_stage_predecessor_collection: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

build_pipeline_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}

---

##### `build_pipeline_stage_type`<sup>Required</sup> <a name="build_pipeline_stage_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType"></a>

```python
build_pipeline_stage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}.

---

##### `build_runner_shape_config`<sup>Optional</sup> <a name="build_runner_shape_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig"></a>

```python
build_runner_shape_config: DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

build_runner_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}

---

##### `build_source_collection`<sup>Optional</sup> <a name="build_source_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection"></a>

```python
build_source_collection: DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

build_source_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}

---

##### `build_spec_file`<sup>Optional</sup> <a name="build_spec_file" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile"></a>

```python
build_spec_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}.

---

##### `deliver_artifact_collection`<sup>Optional</sup> <a name="deliver_artifact_collection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection"></a>

```python
deliver_artifact_collection: DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

deliver_artifact_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}

---

##### `deploy_pipeline_id`<sup>Optional</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}.

---

##### `is_pass_all_parameters_enabled`<sup>Optional</sup> <a name="is_pass_all_parameters_enabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled"></a>

```python
is_pass_all_parameters_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}.

---

##### `primary_build_source`<sup>Optional</sup> <a name="primary_build_source" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource"></a>

```python
primary_build_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}.

---

##### `private_access_config`<sup>Optional</sup> <a name="private_access_config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig"></a>

```python
private_access_config: DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

private_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}

---

##### `stage_execution_timeout_in_seconds`<sup>Optional</sup> <a name="stage_execution_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds"></a>

```python
stage_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts"></a>

```python
timeouts: DevopsBuildPipelineStageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}

---

##### `wait_criteria`<sup>Optional</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria"></a>

```python
wait_criteria: DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}

---

### DevopsBuildPipelineStageDeliverArtifactCollection <a name="DevopsBuildPipelineStageDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection(
  items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageDeliverArtifactCollectionItems <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems(
  artifact_id: str = None,
  artifact_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId">artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName">artifact_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}. |

---

##### `artifact_id`<sup>Optional</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}.

---

##### `artifact_name`<sup>Optional</sup> <a name="artifact_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}.

---

### DevopsBuildPipelineStagePrivateAccessConfig <a name="DevopsBuildPipelineStagePrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig(
  network_channel_type: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}. |

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}.

---

### DevopsBuildPipelineStageTimeouts <a name="DevopsBuildPipelineStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}.

---

### DevopsBuildPipelineStageWaitCriteria <a name="DevopsBuildPipelineStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria(
  wait_duration: str,
  wait_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration">wait_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType">wait_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}. |

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}.

---

##### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType"></a>

```python
wait_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems">put_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```python
items: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---


### DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference <a name="DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput">build_runner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType">build_runner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_runner_type_input`<sup>Optional</sup> <a name="build_runner_type_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput"></a>

```python
build_runner_type_input: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `build_runner_type`<sup>Required</sup> <a name="build_runner_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```python
build_runner_type: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsList <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl">reset_repository_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_repository_url` <a name="reset_repository_url" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl"></a>

```python
def reset_repository_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput">repository_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `repository_url_input`<sup>Optional</sup> <a name="repository_url_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput"></a>

```python
repository_url_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsBuildPipelineStageBuildSourceCollectionItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]

---


### DevopsBuildPipelineStageBuildSourceCollectionOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items"></a>

```python
items: DevopsBuildPipelineStageBuildSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageBuildSourceCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsList <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId">reset_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName">reset_artifact_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_id` <a name="reset_artifact_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId"></a>

```python
def reset_artifact_id() -> None
```

##### `reset_artifact_name` <a name="reset_artifact_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName"></a>

```python
def reset_artifact_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput">artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput">artifact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName">artifact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_id_input`<sup>Optional</sup> <a name="artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput"></a>

```python
artifact_id_input: str
```

- *Type:* str

---

##### `artifact_name_input`<sup>Optional</sup> <a name="artifact_name_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput"></a>

```python
artifact_name_input: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `artifact_name`<sup>Required</sup> <a name="artifact_name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsBuildPipelineStageDeliverArtifactCollectionItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]

---


### DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items"></a>

```python
items: DevopsBuildPipelineStageDeliverArtifactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsBuildPipelineStageDeliverArtifactCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---


### DevopsBuildPipelineStagePrivateAccessConfigOutputReference <a name="DevopsBuildPipelineStagePrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput">network_channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_channel_type_input`<sup>Optional</sup> <a name="network_channel_type_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput"></a>

```python
network_channel_type_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---


### DevopsBuildPipelineStageTimeoutsOutputReference <a name="DevopsBuildPipelineStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsBuildPipelineStageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>]

---


### DevopsBuildPipelineStageWaitCriteriaOutputReference <a name="DevopsBuildPipelineStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_build_pipeline_stage

devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput">wait_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput">wait_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration">wait_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType">wait_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wait_duration_input`<sup>Optional</sup> <a name="wait_duration_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```python
wait_duration_input: str
```

- *Type:* str

---

##### `wait_type_input`<sup>Optional</sup> <a name="wait_type_input" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```python
wait_type_input: str
```

- *Type:* str

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

---

##### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType"></a>

```python
wait_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---



