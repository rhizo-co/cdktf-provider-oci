# `devopsBuildPipelineStage` Submodule <a name="`devopsBuildPipelineStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsBuildPipelineStage <a name="DevopsBuildPipelineStage" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStage;

DevopsBuildPipelineStage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .buildPipelineId(java.lang.String)
    .buildPipelineStagePredecessorCollection(DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection)
    .buildPipelineStageType(java.lang.String)
//  .buildRunnerShapeConfig(DevopsBuildPipelineStageBuildRunnerShapeConfig)
//  .buildSourceCollection(DevopsBuildPipelineStageBuildSourceCollection)
//  .buildSpecFile(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deliverArtifactCollection(DevopsBuildPipelineStageDeliverArtifactCollection)
//  .deployPipelineId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .image(java.lang.String)
//  .isPassAllParametersEnabled(java.lang.Boolean)
//  .isPassAllParametersEnabled(IResolvable)
//  .primaryBuildSource(java.lang.String)
//  .privateAccessConfig(DevopsBuildPipelineStagePrivateAccessConfig)
//  .stageExecutionTimeoutInSeconds(java.lang.Number)
//  .timeouts(DevopsBuildPipelineStageTimeouts)
//  .waitCriteria(DevopsBuildPipelineStageWaitCriteria)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStagePredecessorCollection">buildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | build_pipeline_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStageType">buildPipelineStageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildRunnerShapeConfig">buildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | build_runner_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSourceCollection">buildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | build_source_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSpecFile">buildSpecFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deliverArtifactCollection">deliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | deliver_artifact_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.isPassAllParametersEnabled">isPassAllParametersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.primaryBuildSource">primaryBuildSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.privateAccessConfig">privateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | private_access_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.stageExecutionTimeoutInSeconds">stageExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}.

---

##### `buildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="buildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStagePredecessorCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

build_pipeline_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}

---

##### `buildPipelineStageType`<sup>Required</sup> <a name="buildPipelineStageType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildPipelineStageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}.

---

##### `buildRunnerShapeConfig`<sup>Optional</sup> <a name="buildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildRunnerShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

build_runner_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}

---

##### `buildSourceCollection`<sup>Optional</sup> <a name="buildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSourceCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

build_source_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}

---

##### `buildSpecFile`<sup>Optional</sup> <a name="buildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.buildSpecFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}.

---

##### `deliverArtifactCollection`<sup>Optional</sup> <a name="deliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deliverArtifactCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

deliver_artifact_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.deployPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.image"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}.

---

##### `isPassAllParametersEnabled`<sup>Optional</sup> <a name="isPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.isPassAllParametersEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}.

---

##### `primaryBuildSource`<sup>Optional</sup> <a name="primaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.primaryBuildSource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}.

---

##### `privateAccessConfig`<sup>Optional</sup> <a name="privateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.privateAccessConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

private_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}

---

##### `stageExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="stageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.stageExecutionTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}

---

##### `waitCriteria`<sup>Optional</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.waitCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection">putBuildPipelineStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig">putBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection">putBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection">putDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig">putPrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria">putWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig">resetBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection">resetBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile">resetBuildSpecFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection">resetDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId">resetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled">resetIsPassAllParametersEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource">resetPrimaryBuildSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig">resetPrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds">resetStageExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria">resetWaitCriteria</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildPipelineStagePredecessorCollection` <a name="putBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection"></a>

```java
public void putBuildPipelineStagePredecessorCollection(DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---

##### `putBuildRunnerShapeConfig` <a name="putBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig"></a>

```java
public void putBuildRunnerShapeConfig(DevopsBuildPipelineStageBuildRunnerShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---

##### `putBuildSourceCollection` <a name="putBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection"></a>

```java
public void putBuildSourceCollection(DevopsBuildPipelineStageBuildSourceCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---

##### `putDeliverArtifactCollection` <a name="putDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection"></a>

```java
public void putDeliverArtifactCollection(DevopsBuildPipelineStageDeliverArtifactCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---

##### `putPrivateAccessConfig` <a name="putPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig"></a>

```java
public void putPrivateAccessConfig(DevopsBuildPipelineStagePrivateAccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts"></a>

```java
public void putTimeouts(DevopsBuildPipelineStageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

---

##### `putWaitCriteria` <a name="putWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria"></a>

```java
public void putWaitCriteria(DevopsBuildPipelineStageWaitCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---

##### `resetBuildRunnerShapeConfig` <a name="resetBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig"></a>

```java
public void resetBuildRunnerShapeConfig()
```

##### `resetBuildSourceCollection` <a name="resetBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection"></a>

```java
public void resetBuildSourceCollection()
```

##### `resetBuildSpecFile` <a name="resetBuildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile"></a>

```java
public void resetBuildSpecFile()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeliverArtifactCollection` <a name="resetDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection"></a>

```java
public void resetDeliverArtifactCollection()
```

##### `resetDeployPipelineId` <a name="resetDeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId"></a>

```java
public void resetDeployPipelineId()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId"></a>

```java
public void resetId()
```

##### `resetImage` <a name="resetImage" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage"></a>

```java
public void resetImage()
```

##### `resetIsPassAllParametersEnabled` <a name="resetIsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled"></a>

```java
public void resetIsPassAllParametersEnabled()
```

##### `resetPrimaryBuildSource` <a name="resetPrimaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource"></a>

```java
public void resetPrimaryBuildSource()
```

##### `resetPrivateAccessConfig` <a name="resetPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig"></a>

```java
public void resetPrivateAccessConfig()
```

##### `resetStageExecutionTimeoutInSeconds` <a name="resetStageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds"></a>

```java
public void resetStageExecutionTimeoutInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitCriteria` <a name="resetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria"></a>

```java
public void resetWaitCriteria()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStage;

DevopsBuildPipelineStage.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStage;

DevopsBuildPipelineStage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStage;

DevopsBuildPipelineStage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStage;

DevopsBuildPipelineStage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsBuildPipelineStage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsBuildPipelineStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsBuildPipelineStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsBuildPipelineStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection">buildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig">buildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection">buildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection">deliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig">privateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput">buildPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput">buildPipelineStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput">buildPipelineStageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput">buildRunnerShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput">buildSourceCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput">buildSpecFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput">deliverArtifactCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput">deployPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput">isPassAllParametersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput">primaryBuildSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput">privateAccessConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput">stageExecutionTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput">waitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType">buildPipelineStageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile">buildSpecFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled">isPassAllParametersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource">primaryBuildSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds">stageExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="buildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference getBuildPipelineStagePredecessorCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a>

---

##### `buildRunnerShapeConfig`<sup>Required</sup> <a name="buildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig"></a>

```java
public DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference getBuildRunnerShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a>

---

##### `buildSourceCollection`<sup>Required</sup> <a name="buildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollectionOutputReference getBuildSourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `deliverArtifactCollection`<sup>Required</sup> <a name="deliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference getDeliverArtifactCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `privateAccessConfig`<sup>Required</sup> <a name="privateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig"></a>

```java
public DevopsBuildPipelineStagePrivateAccessConfigOutputReference getPrivateAccessConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts"></a>

```java
public DevopsBuildPipelineStageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria"></a>

```java
public DevopsBuildPipelineStageWaitCriteriaOutputReference getWaitCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a>

---

##### `buildPipelineIdInput`<sup>Optional</sup> <a name="buildPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput"></a>

```java
public java.lang.String getBuildPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `buildPipelineStagePredecessorCollectionInput`<sup>Optional</sup> <a name="buildPipelineStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection getBuildPipelineStagePredecessorCollectionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---

##### `buildPipelineStageTypeInput`<sup>Optional</sup> <a name="buildPipelineStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput"></a>

```java
public java.lang.String getBuildPipelineStageTypeInput();
```

- *Type:* java.lang.String

---

##### `buildRunnerShapeConfigInput`<sup>Optional</sup> <a name="buildRunnerShapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput"></a>

```java
public DevopsBuildPipelineStageBuildRunnerShapeConfig getBuildRunnerShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---

##### `buildSourceCollectionInput`<sup>Optional</sup> <a name="buildSourceCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollection getBuildSourceCollectionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---

##### `buildSpecFileInput`<sup>Optional</sup> <a name="buildSpecFileInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput"></a>

```java
public java.lang.String getBuildSpecFileInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deliverArtifactCollectionInput`<sup>Optional</sup> <a name="deliverArtifactCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollection getDeliverArtifactCollectionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---

##### `deployPipelineIdInput`<sup>Optional</sup> <a name="deployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput"></a>

```java
public java.lang.String getDeployPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `isPassAllParametersEnabledInput`<sup>Optional</sup> <a name="isPassAllParametersEnabledInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput"></a>

```java
public java.lang.Object getIsPassAllParametersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryBuildSourceInput`<sup>Optional</sup> <a name="primaryBuildSourceInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput"></a>

```java
public java.lang.String getPrimaryBuildSourceInput();
```

- *Type:* java.lang.String

---

##### `privateAccessConfigInput`<sup>Optional</sup> <a name="privateAccessConfigInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput"></a>

```java
public DevopsBuildPipelineStagePrivateAccessConfig getPrivateAccessConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---

##### `stageExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="stageExecutionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStageExecutionTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

---

##### `waitCriteriaInput`<sup>Optional</sup> <a name="waitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput"></a>

```java
public DevopsBuildPipelineStageWaitCriteria getWaitCriteriaInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

---

##### `buildPipelineStageType`<sup>Required</sup> <a name="buildPipelineStageType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType"></a>

```java
public java.lang.String getBuildPipelineStageType();
```

- *Type:* java.lang.String

---

##### `buildSpecFile`<sup>Required</sup> <a name="buildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile"></a>

```java
public java.lang.String getBuildSpecFile();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `isPassAllParametersEnabled`<sup>Required</sup> <a name="isPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled"></a>

```java
public java.lang.Object getIsPassAllParametersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryBuildSource`<sup>Required</sup> <a name="primaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource"></a>

```java
public java.lang.String getPrimaryBuildSource();
```

- *Type:* java.lang.String

---

##### `stageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="stageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getStageExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection;

DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.builder()
    .items(IResolvable)
    .items(java.util.List<DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems;

DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsBuildPipelineStageBuildRunnerShapeConfig <a name="DevopsBuildPipelineStageBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildRunnerShapeConfig;

DevopsBuildPipelineStageBuildRunnerShapeConfig.builder()
    .buildRunnerType(java.lang.String)
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType">buildRunnerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}. |

---

##### `buildRunnerType`<sup>Required</sup> <a name="buildRunnerType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType"></a>

```java
public java.lang.String getBuildRunnerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}.

---

### DevopsBuildPipelineStageBuildSourceCollection <a name="DevopsBuildPipelineStageBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildSourceCollection;

DevopsBuildPipelineStageBuildSourceCollection.builder()
//  .items(IResolvable)
//  .items(java.util.List<DevopsBuildPipelineStageBuildSourceCollectionItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildSourceCollectionItems <a name="DevopsBuildPipelineStageBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildSourceCollectionItems;

DevopsBuildPipelineStageBuildSourceCollectionItems.builder()
    .connectionType(java.lang.String)
//  .branch(java.lang.String)
//  .connectionId(java.lang.String)
//  .name(java.lang.String)
//  .repositoryId(java.lang.String)
//  .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}. |

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}.

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}.

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}.

---

### DevopsBuildPipelineStageConfig <a name="DevopsBuildPipelineStageConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageConfig;

DevopsBuildPipelineStageConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .buildPipelineId(java.lang.String)
    .buildPipelineStagePredecessorCollection(DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection)
    .buildPipelineStageType(java.lang.String)
//  .buildRunnerShapeConfig(DevopsBuildPipelineStageBuildRunnerShapeConfig)
//  .buildSourceCollection(DevopsBuildPipelineStageBuildSourceCollection)
//  .buildSpecFile(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deliverArtifactCollection(DevopsBuildPipelineStageDeliverArtifactCollection)
//  .deployPipelineId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .image(java.lang.String)
//  .isPassAllParametersEnabled(java.lang.Boolean)
//  .isPassAllParametersEnabled(IResolvable)
//  .primaryBuildSource(java.lang.String)
//  .privateAccessConfig(DevopsBuildPipelineStagePrivateAccessConfig)
//  .stageExecutionTimeoutInSeconds(java.lang.Number)
//  .timeouts(DevopsBuildPipelineStageTimeouts)
//  .waitCriteria(DevopsBuildPipelineStageWaitCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId">buildPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection">buildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | build_pipeline_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType">buildPipelineStageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig">buildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | build_runner_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection">buildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | build_source_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile">buildSpecFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection">deliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | deliver_artifact_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled">isPassAllParametersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource">primaryBuildSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig">privateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | private_access_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds">stageExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId"></a>

```java
public java.lang.String getBuildPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}.

---

##### `buildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="buildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection getBuildPipelineStagePredecessorCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

build_pipeline_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}

---

##### `buildPipelineStageType`<sup>Required</sup> <a name="buildPipelineStageType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType"></a>

```java
public java.lang.String getBuildPipelineStageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}.

---

##### `buildRunnerShapeConfig`<sup>Optional</sup> <a name="buildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig"></a>

```java
public DevopsBuildPipelineStageBuildRunnerShapeConfig getBuildRunnerShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

build_runner_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}

---

##### `buildSourceCollection`<sup>Optional</sup> <a name="buildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollection getBuildSourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

build_source_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}

---

##### `buildSpecFile`<sup>Optional</sup> <a name="buildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile"></a>

```java
public java.lang.String getBuildSpecFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}.

---

##### `deliverArtifactCollection`<sup>Optional</sup> <a name="deliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollection getDeliverArtifactCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

deliver_artifact_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}

---

##### `deployPipelineId`<sup>Optional</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}.

---

##### `isPassAllParametersEnabled`<sup>Optional</sup> <a name="isPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled"></a>

```java
public java.lang.Object getIsPassAllParametersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}.

---

##### `primaryBuildSource`<sup>Optional</sup> <a name="primaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource"></a>

```java
public java.lang.String getPrimaryBuildSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}.

---

##### `privateAccessConfig`<sup>Optional</sup> <a name="privateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig"></a>

```java
public DevopsBuildPipelineStagePrivateAccessConfig getPrivateAccessConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

private_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}

---

##### `stageExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="stageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getStageExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts"></a>

```java
public DevopsBuildPipelineStageTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}

---

##### `waitCriteria`<sup>Optional</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria"></a>

```java
public DevopsBuildPipelineStageWaitCriteria getWaitCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}

---

### DevopsBuildPipelineStageDeliverArtifactCollection <a name="DevopsBuildPipelineStageDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageDeliverArtifactCollection;

DevopsBuildPipelineStageDeliverArtifactCollection.builder()
//  .items(IResolvable)
//  .items(java.util.List<DevopsBuildPipelineStageDeliverArtifactCollectionItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageDeliverArtifactCollectionItems <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageDeliverArtifactCollectionItems;

DevopsBuildPipelineStageDeliverArtifactCollectionItems.builder()
//  .artifactId(java.lang.String)
//  .artifactName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName">artifactName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}. |

---

##### `artifactId`<sup>Optional</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}.

---

##### `artifactName`<sup>Optional</sup> <a name="artifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName"></a>

```java
public java.lang.String getArtifactName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}.

---

### DevopsBuildPipelineStagePrivateAccessConfig <a name="DevopsBuildPipelineStagePrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStagePrivateAccessConfig;

DevopsBuildPipelineStagePrivateAccessConfig.builder()
    .networkChannelType(java.lang.String)
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}. |

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}.

---

### DevopsBuildPipelineStageTimeouts <a name="DevopsBuildPipelineStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageTimeouts;

DevopsBuildPipelineStageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}.

---

### DevopsBuildPipelineStageWaitCriteria <a name="DevopsBuildPipelineStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageWaitCriteria;

DevopsBuildPipelineStageWaitCriteria.builder()
    .waitDuration(java.lang.String)
    .waitType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType">waitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}. |

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}.

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType"></a>

```java
public java.lang.String getWaitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList;

new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>>

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference;

new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference;

new DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---


### DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference <a name="DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference;

new DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput">buildRunnerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType">buildRunnerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildRunnerTypeInput`<sup>Optional</sup> <a name="buildRunnerTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput"></a>

```java
public java.lang.String getBuildRunnerTypeInput();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `buildRunnerType`<sup>Required</sup> <a name="buildRunnerType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```java
public java.lang.String getBuildRunnerType();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStageBuildRunnerShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsList <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildSourceCollectionItemsList;

new DevopsBuildPipelineStageBuildSourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>>

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference;

new DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetConnectionId` <a name="resetConnectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId"></a>

```java
public void resetRepositoryId()
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>

---


### DevopsBuildPipelineStageBuildSourceCollectionOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference;

new DevopsBuildPipelineStageBuildSourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsBuildPipelineStageBuildSourceCollectionItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems">DevopsBuildPipelineStageBuildSourceCollectionItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStageBuildSourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsList <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList;

new DevopsBuildPipelineStageDeliverArtifactCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>>

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference;

new DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId">resetArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName">resetArtifactName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactId` <a name="resetArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId"></a>

```java
public void resetArtifactId()
```

##### `resetArtifactName` <a name="resetArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName"></a>

```java
public void resetArtifactName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput">artifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput">artifactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName">artifactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput"></a>

```java
public java.lang.String getArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `artifactNameInput`<sup>Optional</sup> <a name="artifactNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput"></a>

```java
public java.lang.String getArtifactNameInput();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `artifactName`<sup>Required</sup> <a name="artifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```java
public java.lang.String getArtifactName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>

---


### DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference;

new DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsBuildPipelineStageDeliverArtifactCollectionItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems">DevopsBuildPipelineStageDeliverArtifactCollectionItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStageDeliverArtifactCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---


### DevopsBuildPipelineStagePrivateAccessConfigOutputReference <a name="DevopsBuildPipelineStagePrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference;

new DevopsBuildPipelineStagePrivateAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput">networkChannelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkChannelTypeInput`<sup>Optional</sup> <a name="networkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput"></a>

```java
public java.lang.String getNetworkChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStagePrivateAccessConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---


### DevopsBuildPipelineStageTimeoutsOutputReference <a name="DevopsBuildPipelineStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageTimeoutsOutputReference;

new DevopsBuildPipelineStageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

---


### DevopsBuildPipelineStageWaitCriteriaOutputReference <a name="DevopsBuildPipelineStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_build_pipeline_stage.DevopsBuildPipelineStageWaitCriteriaOutputReference;

new DevopsBuildPipelineStageWaitCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput">waitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```java
public java.lang.String getWaitDurationInput();
```

- *Type:* java.lang.String

---

##### `waitTypeInput`<sup>Optional</sup> <a name="waitTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```java
public java.lang.String getWaitTypeInput();
```

- *Type:* java.lang.String

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType"></a>

```java
public java.lang.String getWaitType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue"></a>

```java
public DevopsBuildPipelineStageWaitCriteria getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---



